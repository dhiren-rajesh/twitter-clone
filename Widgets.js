import React from 'react'
import './Widgets.css'
import{
    //TwitterTimelineEmbed,
    //TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" /> 
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"}></TwitterTweetEmbed>
                {/* <TwitterTimelineEmbed className="widgets__scroll" sourceType="profile" screenName="iamdhirenrajesh" 
                options={{height: 400}} /> */}
            </div>
        </div>
    )
}

export default Widgets
