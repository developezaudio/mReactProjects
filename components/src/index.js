import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author="sam" 
                timeAgo="today at 12:30pm"
                commentText="Nice blog post!"
            />
        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));