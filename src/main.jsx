import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoXLg-uI8-7Xq_QdZZoL_MjBBquVcs2A8",
  authDomain: "tienda-ceramica.firebaseapp.com",
  projectId: "tienda-ceramica",
  storageBucket: "tienda-ceramica.appspot.com",
  messagingSenderId: "161025784890",
  appId: "1:161025784890:web:131e7aab72319679e84903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
<ChakraProvider>
    <App />
</ChakraProvider>

)
