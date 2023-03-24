const admin = require('firebase-admin');

const serviceAccount = require('generacion-horarios-firebase-adminsdk-9ksjc-7124f57448.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
