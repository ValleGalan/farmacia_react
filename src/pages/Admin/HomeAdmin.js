import React from 'react'
import {useAuth} from "../../hooks/useAuth"


export function HomeAdmin() {
  const {logout} =useAuth();
  return (
    <div>
      <h1>Home Admin</h1>
      <button onClick={logout}>Cerra sesión</button>
    </div>
  )
}
