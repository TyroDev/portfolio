const admin = require("firebase-admin");

// admin.initializeApp();

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tyroapp-2567e.firebaseio.com",
  storageBucket: "tyroapp-2567e.appspot.com",
});

const db = admin.firestore();

module.exports = { admin, db };
