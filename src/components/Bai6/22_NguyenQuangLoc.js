import React from 'react'

function Avatar({ author }) {
    return (
        <div className="Avatar">
            <img
                className="Avatar"
                src={author.avatarUrl}
                alt={author.name}
                style={{ width: '20px', height: '20px' }}
            />
        </div>
    );
}

function UserInfo({ author }) {
    return (
        <div className="UserInfo">
            <Avatar author={author} />
            <div className="UserInfo-name">
                {author.name}
            </div>
        </div>
    );
}

function CommentText({ text }) {
    return (
        <div className="Comment-text">
            {text}
        </div>
    );
}

function CommentDate({ date }) {
    return (
        <div className="Comment-date">
            {date.toLocaleDateString()}
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author={props.author} />
            <CommentText text={props.text} />
            <CommentDate date={props.date} />
        </div>
    );
}

function CommentApp() {
    const comment = {
        author: {
            name: 'Loc Nguyen',
            avatarUrl: 'https://cdn.shopify.com/s/files/1/0469/3927/5428/files/Screenshot_2024-08-19_at_14.36.56.png?v=1724071042'
        },
        text: 'Test',
        date: new Date()
    };

    return (
        <Comment
            author={comment.author}
            text={comment.text}
            date={comment.date}
        />
    );
}

export { CommentApp };