var mongoose = require('mongoose');
var Loc = mongoose.model('Location');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* POST a new review, providing a locationid */
/* /api/locations/:locationid/reviews */
module.exports.ipsCreate = function(req, res) {
  console.log("Reviewing");
  getAuthor(req, res, function (req, res, userName) {
    if (req.params.locationid) {
      Loc
        .findById(req.params.locationid)
        .select('ips')
        .exec(
          function(err, location) {
            if (err) {
              sendJSONresponse(res, 400, err);
            } else {
              doAddIp(req, res, location, userName);
            }
          }
      );
    } else {
      sendJSONresponse(res, 404, {
        "message": "Not found, locationid required"
      });
    }
  });
};

var getAuthor = function(req, res, callback) {
  console.log("Finding author with email " + req.payload.email);
  if (req.payload.email) {
    User
      .findOne({ email : req.payload.email })
      .exec(function(err, user) {
        if (!user) {
          sendJSONresponse(res, 404, {
            "message": "User not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(user);
        callback(req, res, user.name);
      });

  } else {
    sendJSONresponse(res, 404, {
      "message": "User not found"
    });
    return;
  }

};

var doAddIp = function(req, res, location, author) {
  if (!location) {
    sendJSONresponse(res, 404, "locationid not found");
  } else {
    location.ips.push({
      author: author,
      ipText: req.body.ipText
    });
    location.save(function(err, location) {
      var thisReview;
      if (err) {
        sendJSONresponse(res, 400, err);
      } else {
        
        thisReview = location.ips[location.ips.length - 1];
        sendJSONresponse(res, 201, thisReview);
      }
    });
  }
};



module.exports.ipsUpdateOne = function(req, res) {
  if (!req.params.locationid || !req.params.ipid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, locationid and reviewid are both required"
    });
    return;
  }
  Loc
    .findById(req.params.locationid)
    .select('ips')
    .exec(
      function(err, location) {
        var thisReview;
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        if (location.ips && location.ips.length > 0) {
          thisReview = location.ips.id(req.params.ipid);
          if (!thisReview) {
            sendJSONresponse(res, 404, {
              "message": "reviewid not found"
            });
          } else {


            thisReview.author = req.body.author;
            thisReview.ipText = req.body.ipText;
            location.save(function(err, location) {
              if (err) {
                sendJSONresponse(res, 404, err);
              } else {
                updateAverageRating(location._id);
                sendJSONresponse(res, 200, thisReview);
              }
            });
          }
        } else {
          sendJSONresponse(res, 404, {
            "message": "No review to update"
          });
        }
      }
  );
};

module.exports.ipsReadOne = function(req, res) {
  console.log("Getting single review");
  if (req.params && req.params.locationid && req.params.ipid) {
    Loc
      .findById(req.params.locationid)
      .select('name ips')
      .exec(
        function(err, location) {
          console.log(location);
          var response, review;
          if (!location) {
            sendJSONresponse(res, 404, {
              "message": "locationid not found"
            });
            return;
          } else if (err) {
            sendJSONresponse(res, 400, err);
            return;
          }
          if (location.ips && location.ips.length > 0) {
            review = location.ips.id(req.params.ipid);
            if (!review) {
              sendJSONresponse(res, 404, {
                "message": "reviewid not found"
              });
            } else {
              response = {
                location: {
                  name: location.name,
                  id: req.params.locationid
                },
                review: review
              };
              sendJSONresponse(res, 200, response);
            }
          } else {
            sendJSONresponse(res, 404, {
              "message": "No reviews found"
            });
          }
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "Not found, locationid and reviewid are both required"
    });
  }
};

// app.delete('/api/locations/:locationid/reviews/:reviewid'
module.exports.ipsDeleteOne = function(req, res) {
  if (!req.params.locationid || !req.params.ipid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, locationid and reviewid are both required"
    });
    return;
  }
  Loc
    .findById(req.params.locationid)
    .select('ips')
    .exec(
      function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        if (location.ips && location.ips.length > 0) {
          if (!location.ips.id(req.params.ipid)) {
            sendJSONresponse(res, 404, {
              "message": "reviewid not found"
            });
          } else {
            location.ips.id(req.params.ipid).remove();
            location.save(function(err) {
              if (err) {
                sendJSONresponse(res, 404, err);
              } else {
                updateAverageRating(location._id);
                sendJSONresponse(res, 204, null);
              }
            });
          }
        } else {
          sendJSONresponse(res, 404, {
            "message": "No review to delete"
          });
        }
      }
  );
};
