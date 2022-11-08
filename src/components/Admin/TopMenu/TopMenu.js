import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks/useAuth";
import "./TopMenu.scss";
import { Image } from 'semantic-ui-react'
import logo_geoFarma from "../../../image/logo_geoFarma.png"

const ImageExampleImage = () => (
  <Image src='../../../image/logo_geoFarma.png' size='small' />
)

export function TopMenu() {
  const { auth, logout } = useAuth();

  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  };

  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-menu-admin__logo">
        <div>
        <img src={logo_geoFarma} width="100px"  height="40px"/>
          
        </div>

      </Menu.Item>

      <Menu.Menu position="right"  className="colorHeader">
        <Menu.Item>Bienvenida, {renderName()}</Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name="sign-out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}