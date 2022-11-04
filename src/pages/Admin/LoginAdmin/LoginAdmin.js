import React from 'react';
import "./LoginAdmin.scss";
import {LoginFormulario} from "../../../components/Admin/LoginFormulario/LoginFormulario";

export function LoginAdmin() {
  return (
    <div className='login-admin'>
      <div className="login-admin_content">
        <h1>Panel del administrador</h1>
        <LoginFormulario/>
      </div>
    </div>
  )
}
