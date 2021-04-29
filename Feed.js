import React, {useState, useEffect} from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox.js';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => { 
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />
            
            <FlipMove>
            {posts.map(post => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    // displayName="Sonny Sangha"
                    // username="ssssangha"
                    // verified={true}
                    // text="Why TF doesn't it work??"
                    // image="https://i.pinimg.com/originals/81/16/88/811688d44a9906c2b1db6cde2304168b.gif"
                ></Post>
            ))}
            </FlipMove>
        </div>
    ); 
}

export default Feed
