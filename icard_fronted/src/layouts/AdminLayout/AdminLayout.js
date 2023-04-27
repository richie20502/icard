import React from 'react';
import {LoginAdmin} from "../../pages/Admin";
import "./AdminLayout.scss";
import { useAuth } from '../../hooks';
import { TopMenu } from "../../components/Admin";

export function AdminLayout(props) {
  const {children} = props;
  const {auth} = useAuth();
  if(!auth) return <LoginAdmin/>;
  return (
    <div className='admin-layout'>
      <div className='admin-layout__menu'>
        <TopMenu/>
      </div>
      <div className='admin-layout__main-content'>
        {children}
      </div>
    </div>
  )
}
