import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import './sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>lamadin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className={'icon'} />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <GroupsOutlinedIcon className={'icon'} />
            <span>Users</span>
          </li>
          <li>
            <ShoppingCartIcon className={'icon'} />
            <span>Products</span>
          </li>
          <li>
            <RateReviewIcon className={'icon'} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className={'icon'} />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className={'icon'} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className={'icon'} />
            <span>Notificatons</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className={'icon'} />
            <span>System Health</span>
          </li>
          <li>
            <LogoDevOutlinedIcon className={'icon'} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className={'icon'} />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleOutlinedIcon className={'icon'} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className={'icon'} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
};

export default Sidebar;
