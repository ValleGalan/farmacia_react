import React from 'react'
import "./AdminLayout.scss"
import { LoginAdmin } from '../../pages/Admin';

export  function AdminLayout(props) {
   const {children} = props;
   //Si no esta logueado devuelve el login
   const auth =null;
   if(!auth) return <LoginAdmin/>;

  return (
    <div>
        <p>AdminLayouts </p>
      {children}
    </div>
  )
}
