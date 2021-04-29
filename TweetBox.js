import React, {useState} from 'react'
import './TweetBox.css'
import {Button} from "@material-ui/core"
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');

    const sendTweet = (e) => {
        e.preventDeafult()

        db.collection('posts').add({
            displayName: 'Dhiren Rajesh',
            username: 'iamdhirenrajesh',
            text: tweetMessage,
            verified: true,
            image: "https://i.pinimg.com/originals/81/16/88/811688d44a9906c2b1db6cde2304168b.gif"
        })

        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <input onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage} placeholder="What is happening?"></input>
                </div>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>            
        </div>
    )
}

export default TweetBox
