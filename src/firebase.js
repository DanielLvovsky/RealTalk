import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: 'AIzaSyCS6t6CncxZ2OHUIx0nGKzQkKYQFe0bdpw',
  authDomain: 'realtalk-d1831.firebaseapp.com',
  databaseURL: 'https://realtalk-d1831.firebaseio.com',
  projectId: 'realtalk-d1831',
  storageBucket: 'realtalk-d1831.appspot.com',
  messagingSenderId: '384515292264',
  appId: '1:384515292264:web:bf385e399cf4a732a60fdd'
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
