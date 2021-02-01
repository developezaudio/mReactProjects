import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
        <CommentDetail 
            author="sam" 
            timeAgo="today at 12:30pm"
            commentText="Nice blog post!"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));