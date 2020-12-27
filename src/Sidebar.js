import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice';

function Sidebar() {

     const user = useSelector(selectUser);

     const recentItem = (topic) => (
           <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
           </div>
     );

    return (
        <div className='sidebar'>
           <div className="sidebar__top">
               <img src="https://images.unsplash.com/photo-1608500479600-212f8886141a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt=""/>
               <Avatar 
               src={user.photoUrl}
               >
               {user.email[0]}
               </Avatar>
               {/*https://media-exp1.licdn.com/dms/image/C5603AQENjXV6ZWVjuw/profile-displayphoto-shrink_100_100/0/1596403635816?e=1614211200&v=beta&t=HwKS8bsxnmNI1wNNvp3WAOSsS4hdECJLMURadH-ajSY */}
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
           </div>

           <div className="sidebar__stats">
                <div className="sidebar__stat">
                     <p>Who viewed your profile</p>
                     <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                <p>Views of your post</p>
                     <p className="sidebar__statNumber">2,448</p>
                </div>
           </div>

           <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('programming')}
                {recentItem('reactjs')}
                {recentItem('softwareengineering')}
                {recentItem('developer')}
                {recentItem('design')}
                {recentItem('android development')}
           </div>
        </div>
    )
}

export default Sidebar;
