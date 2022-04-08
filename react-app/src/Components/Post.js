import Comments from "./Comments";
const Post = ({ title, body, comments, postId, rerenderer }) => {
    return (
        <div style={{ textAlign: "left", marginBottom: "12px" }}>
            <h3>{title}</h3>
            <p>{body}</p>
            {
                <Comments
                    comments={comments}
                    postId={postId}
                    rerenderer={rerenderer}
                />
            }
        </div>
    );
};

export default Post;
