  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  var firebaseConfig = {
    // I've deleted my account specific firebase configuration data (appId, apikey etc)
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});
//   firebase.analytics();

  export default firebase;