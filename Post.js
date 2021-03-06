import React, {forwardRef} from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Post = forwardRef(({displayName, username, verified, text, image}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <AccountCircleIcon />
            </div>
            <div className="post__body"> 
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}<span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image}
                alt="Twitter Gif" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
});

export default Post
