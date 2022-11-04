import React from 'react'
import "./AdminLayout.scss"
import { LoginAdmin } from '../../pages/Admin';
import {TopMenu,SideMenu} from "../../components/Admin"
import { useAuth } from '../../hooks/useAuth';


export  function AdminLayout(props) {
   const {children} = props;
   const {auth} = useAuth();
   console.log(auth);
   //Si no esta logueado devuelve el login const auth =null;
   
   if(!auth) return <LoginAdmin/>; //DESCOMENTAR CUANDO HAGA LO DE USUARIO Y ADMIN

  return (
    <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu />
      </div>

      <div className="admin-layout__main-content">
        <SideMenu>{children}</SideMenu>
      </div>
    </div>
  )
}
