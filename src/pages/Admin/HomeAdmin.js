import React from 'react'
import {useAuth} from "../../hooks/useAuth"


export function HomeAdmin() {
  const {logout} =useAuth();
  return (
    <div>
      <button onClick={logout}>Cerra sesión</button>
    </div>
  )
}
