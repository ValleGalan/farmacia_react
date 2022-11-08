import React from 'react';
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";

//Importar Navegation
import {Navigation} from "./routes";
import "./App.scss";

export default function App() {
  return (
    <div className='colorFondo'>
      <AuthProvider>
        <Navigation/>
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      </AuthProvider>
    </div>
  )
}

