import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './reactRouterDom/App'
// import App from './reactRouterDom/addFavProdfromStore/App';
// import App from './reactRouterDom/classAssignment/App'
// import App from './contextAPIAuthentication/App';



import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      // <React.StrictMode>
      <BrowserRouter>
       <App />
      </BrowserRouter>
   
  // </React.StrictMode>,
);