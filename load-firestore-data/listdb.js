const admin = require('firebase-admin');
// ... initialize Firebase Admin SDK ...

const db = admin.firestore();
db.listCollections()
    .then(collections => {
        collections.forEach(collection => {
            console.log(collection.id); // The ID of each collection
        });
    })
    .catch(error => {
        console.error("Error listing collections:", error);
    });
