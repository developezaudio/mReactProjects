import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
        <CommentDetail author="sam"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));