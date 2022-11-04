import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./SideMenu.scss";

export function SideMenu(props) {
  const { children } = props;
  const { pathname } = useLocation(); //en que aprte estamos

  return (
    <div className="side-menu-admin">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const { pathname } = props;
  const { auth } = useAuth();
  console.log(auth);//comprobar que el administrador entre
  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}>
        <Icon name="home" /> Farmacias
      </Menu.Item>

    </Menu>
  );
}
/*
Esto es una validacion para que le aparezca solo al admin pero 
lo voy a omitir
      {auth.me?.is_staff && (
        <Menu.Item
          as={Link}
          to={"/admin/users"}
          active={pathname === "/admin/users"}
        >
          <Icon name="users" /> Usuarios
        </Menu.Item>
      )}
*/