import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../src/AssetsMain/Css/fonts/fontawesome-all.css";
// import "../src/AssetsMain/Css/plugins.css";
// import "../src/AssetsMain/Css/animate.css";
// import "../src/AssetsMain/Css/owl.carousel.css";
// import "../src/AssetsMain/Css/navigation.css";
// import "../src/AssetsMain/Css/style.css";
// import "../src/AssetsMain/Css/default.css";
// import 'font-awesome/css/font-awesome.min.css';

// import 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" integrity = "sha256-ENFZrbVzylNbgnXx0n3I1g//2WeO47XxoPe0vkp3NC8=" crossorigin = "anonymous"';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.css';
// ======================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < BrowserRouter >
    <App />
  </BrowserRouter>
);
reportWebVitals();
