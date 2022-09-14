import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXjrWB7NVMwrxe-q7yViuL3ZJ5wVfzEps",
  authDomain: "lap4-3fe21.firebaseapp.com",
  projectId: "lap4-3fe21",
  storageBucket: "lap4-3fe21.appspot.com",
  messagingSenderId: "527520539286",
  appId: "1:527520539286:web:f0b567a7ab915ec85058b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Points to the root reference
const storageRef = ref(storage);
const metadata = {
  contentType: "image/jpeg",
};

export const uploadImage = (file, uid, listingId) => {
  const storageImageRef = ref(
    storage,
    `/files/${uid}/listings/${listingId}/${file.name}`
  );
  return uploadBytesResumable(storageImageRef, file, metadata)
    .then((uploadTaskSnapshot) => {
      return getDownloadURL(uploadTaskSnapshot.ref).then((downloadURL) => {
        return downloadURL;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
