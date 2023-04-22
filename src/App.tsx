import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.scss';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//flex
import "primeflex/primeflex.css";


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
