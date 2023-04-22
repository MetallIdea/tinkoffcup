import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

// core
import "primereact/resources/primereact.min.css";

// theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

// flex
import "primeflex/primeflex.css";

// icons
import 'primeicons/primeicons.css';

// custom
import './App.scss';


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
