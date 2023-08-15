import Post from "./Post";
import Img from "../assets/logo2.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Posts() {
    const { user } = useAuthContext();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/api/posts", {
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            })
            .then((resp) => setPosts(resp.data));
    }, [posts]);
    return (
        <div>
            {" "}
            {posts.length !== 0 && posts.map((post) => <Post details={post} />)}
        </div>
    );
}
