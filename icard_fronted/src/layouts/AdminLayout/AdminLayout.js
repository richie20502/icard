import React from 'react';
import {LoginAdmin} from "../../pages/Admin";
import "./AdminLayout.scss";
import { useAuth } from '../../hooks';

export function AdminLayout(props) {
  const {children} = props;
  const {auth} = useAuth();
  if(!auth) return <LoginAdmin/>;
  return (
    <div>
      <p> AdminLayout </p>
      {children}
    </div>
  )
}
