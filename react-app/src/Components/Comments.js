import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

const Comments = ({ comments, postId, rerenderer }) => {
    const [newComment, setNewComment] = useState();
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3002/post/${postId}/comment`, {
                newComment,
            });
            rerenderer();
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            {comments.map((comment, i) => (
                <p key={postId + i}>{comment}</p>
            ))}
            <Form onSubmit={onSubmit}>
                <FormLabel>Comment</FormLabel>
                <FormControl
                    type="text"
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Comment"
                ></FormControl>
                <Button variety="primary" type="submit" className="mt-2">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Comments;
