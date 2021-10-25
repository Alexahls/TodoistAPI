const newman = require('newman');
 
newman.run({
    collection: require('../Collection/Todoist.postman_collection.json'),
    environment: require('../Environment/Todoist.postman_environment.json'),
    reporters: 'html',
    reporter: {
        html: {
            export: './Reporter/suteResults.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});