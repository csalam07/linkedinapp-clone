import { Avatar } from '@material-ui/core';
import React,{ forwardRef } from 'react';
import InputOption from './InputOption';
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
           <div className="post__header">
                  <Avatar src={photoUrl}>
                     { name }
                  </Avatar>
                  <div className="post__info">
                      <h2>{name}</h2>
                      <p>{description}</p>
                  </div>
           </div>
           <div className="post__message">
               <p>{message}</p>
           </div>
           <div class="post__buttons">
           <InputOption Icon={ThumbUpAltOutlinedIcon} 
                       title='like'
                        color="gray"/>
           <InputOption Icon={CommentOutlinedIcon}
                         title='comment'
                        color="gray"/>
           <InputOption Icon={ShareOutlinedIcon}
                         title='share'
                        color="gray"/>
           <InputOption Icon={SendOutlinedIcon}
                         title='send'
                        color="gray"/>
           </div>
        </div>
    )
})

export default Post;
