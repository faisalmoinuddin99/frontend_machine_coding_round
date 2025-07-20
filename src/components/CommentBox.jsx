import React, { useState } from "react";

const CommentBox = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentPost = () => {
    if (commentText.trim() === "") return;

    const newComment = {
      id: Date.now(),
      text: commentText,
      like: 0,
    };

    setComments([...comments, newComment]);
    setCommentText(""); // Clear the input after posting
  };

  const updateLikeComment = (id, delta) => {
    const updateComment = comments.map((comment) => {
      if (comment.id === id) {
        const likeCount = comment.like + delta;

        return { ...comment, like: likeCount < 0 ? 0 : likeCount };
      }
      return comment;
    });

    setComments(updateComment);
  };

  const handleLikeComment = (id)=>{
    updateLikeComment(id, 1);
  }
  const handleDisLikeComment = (id)=>{
    updateLikeComment(id, -1)
  }
  return (
    <div>
      <h3>Comment Box</h3>
      <input
        placeholder="Type your comment here..."
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={handleCommentPost}>Post</button>

      <ul>
        {comments.map((comment) => {
          return(<li key={comment.id}>{comment.text} - ❤️ {comment.like}
          <button
          onClick={()=> handleLikeComment(comment.id)}
          >Like</button>
          <button
          onClick={()=> handleDisLikeComment(comment.id)}
          >DisLike</button>
          </li>) 
        })}
      </ul>
    </div>
  );
};

export default CommentBox;
