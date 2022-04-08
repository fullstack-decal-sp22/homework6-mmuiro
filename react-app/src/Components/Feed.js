import React, { useEffect, useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import axios from "axios";

const Feed = () => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const forceRender = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                let res = await axios.get("http://localhost:3002/posts");
                setData(res.data);
            } catch (e) {
                console.log(e);
            }
        };
        getData();
    }, [refresh]);

    return (
        <div
            style={{
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            {data.map((d) => (
                <Post
                    title={d.title}
                    body={d.body}
                    key={d.id}
                    comments={d.comments}
                    postId={d.id}
                    rerenderer={forceRender}
                />
            ))}

            <NewPost rerenderer={forceRender} />
        </div>
    );
};

export default Feed;
