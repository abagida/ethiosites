/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Site-Locator',
        content: 'Site-Locator is created to help Ethio-Telecom colleagues find locations and  informations of Network sites .\n\n'
    });
};

/* GET Angular SPA page */
module.exports.angularApp = function(req, res){
  res.render('layout', { title: 'Loc8r' });
};
