import { useState } from "react";
import axios from "axios";

const NewPost = ({ rerenderer }) => {
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("fire");
        try {
            await axios.post("http://localhost:3002/post", {
                id,
                title,
                body,
            });
            rerenderer();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <button style={{ marginTop: "4px" }} onClick={onSubmit}>
                Submit
            </button>
        </div>
    );
};

export default NewPost;
