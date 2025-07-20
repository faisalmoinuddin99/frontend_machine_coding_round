import React, { useState } from 'react'

const CommentBox = ()=>{
    const [commentText, setCommentText] = useState("")
    const [comments, setComments] = useState([])

    const handleCommentPost = () => {
        if(commentText.trim()==="") return

        const newComment={
            id : Date.now(),
            text: commentText,
            like: 0
        }

        setComments([...comments, newComment])
        setCommentText("") // Clear the input after posting
    }
    return(
        <div>
            <h3>Comment Box</h3>
            <input
            placeholder='Type your comment here...'
            type='text'
            value={commentText}
            onChange={(e)=>setCommentText(e.target.value)}
            />
            <button onClick={handleCommentPost}>Post</button>

            <ul>{
                comments.map((comment)=>{
                    return(
                        <li key={comment.id}>{comment.text}</li>
                    )
                })
                }</ul>
        </div>
    )
}

export default CommentBox;