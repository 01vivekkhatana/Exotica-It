import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import logo from '../../images/logo.png';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LooksOutlinedIcon from '@mui/icons-material/LooksOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


function Sidebar(){
    const navigationRef = useRef(null);
    const mainRef = useRef(null);
    const toggleRef = useRef(null);
  
    useEffect(() => {
      // Active Link Highlighting
      const listItems = $(navigationRef.current).find('li');
      listItems.on('mouseover', function () {
        listItems.removeClass('hovered');
        $(this).addClass('hovered');
      });
  
      // Menu Toggle
      $(toggleRef.current).on('click', () => {
        $(navigationRef.current).toggleClass('active');
        $(mainRef.current).toggleClass('active');
      });
  
      // Clean up event listeners on component unmount
      return () => {
        listItems.off('mouseover');
        $(toggleRef.current).off('click');
      };
    }, []);
    return(
        <>
         <div class="navigation" ref={navigationRef}>
            <ul>
                <li>
                    <Link to="/">
                        <span class="icon">
                           <img src={logo} alt='gg'/>
                        </span>
                 
                    </Link>
                </li>

                <li>
                    <Link to="/admin">
                        <span class="icon">
                        <DashboardOutlinedIcon />
                        </span>
                        <span class="title">Dashboard</span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span class="icon">
                            <PeopleAltOutlinedIcon/>
                        </span>
                        <span class="title">Customers</span>
                    </Link>
                </li>

                <li>
                    <Link to="/admin/header_dynamic">
                        <span class="icon">
                            <CreditCardOutlinedIcon/>
                        </span>
                        <span class="title">Header</span>
                    </Link>
                </li>

                <li>
                    <Link to="/admin/home_dynamic">
                        <span class="icon">
                            <AutoStoriesOutlinedIcon/>
                        </span>
                        <span class="title">Pages</span>
                    </Link>
                </li>

                <li>
                    <Link to="/admin/footer_dynamic">
                        <span class="icon">
                            <LooksOutlinedIcon/>
                        </span>
                        <span class="title">Footer</span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span class="icon">
                            <LockOutlinedIcon/>
                        </span>
                        <span class="title">Password</span>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <span class="icon">
                            <ExitToAppOutlinedIcon/>
                        </span>
                        <span class="title">Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
};
export default Sidebar;