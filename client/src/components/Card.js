import React, { useState } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const updateCount = () => {
    setCount((count) => count + 1);
  };

  const getCurrentDateTime = () => {
    const currentTime = new Date();
    const date = `${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()}`;
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
    return `${date} ${time}`;
  };

  const postedDateTime = getCurrentDateTime();

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, { text: newComment, datetime: getCurrentDateTime() }];
      setComments(updatedComments);
      setNewComment('');
    }
  };

  return (
    <div className="Card">
      <Link to={'edit/' + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="Name of Artist">{props.title}</h2>
      <h3 className="Solo or Group">{"by " + props.author}</h3>
      <p className="An Interesting fact about the Artist">{props.description}</p>
      <p className="PostedDateTime">Posted at: {postedDateTime}</p>
      <button className="betButton" onClick={updateCount}>
        ♥ Like: {count}
      </button>
      
      {/* Comments Section */}
      <div className="CommentsSection">
        <h4>Comments:</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              {comment.text} - {comment.datetime}
            </li>
          ))}
        </ul>
        <textarea value={newComment} onChange={handleCommentChange} placeholder="Add a comment..." />
        <button onClick={handleSubmitComment}>Submit Comment</button>
      </div>
    </div>
  );
};

export default Card;
