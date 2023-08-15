import React, { useEffect, useState } from "react";
import Logo from "../assets/logo2.jpeg";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import Posts from "../components/Posts";
const Home = () => {
    const [tweet, setTweet] = useState("");
    const [image, setImage] = useState(null);
    const { user } = useAuthContext();

    const handleTweetChange = (event) => {
        setTweet(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        TransformIMG(file);
    };

    const TransformIMG = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result);
            };
        } else {
            setImage(null);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("started to submit");
        axios
            .post(
                "http://localhost:4000/api/posts/",
                { desc: tweet, img: image },
                {
                    headers: {
                        Authorization: "Bearer " + user.token,
                    },
                }
            )
            .then((response) => alert(response.data))
            .catch((err) => console.log(err.response));

        // Now you can use the tweet, image, file, and gif data to process and send the tweet to the server using AJAX or other methods.
        // For demonstration purposes, we'll just log the data here.
        console.log("Tweet:", tweet);
        console.log("Image:", image);

        // Reset the form after submission
        setTweet("");
        setImage(null);
    };
    return (
        <div className="w-full h-full">
            <span
                className="w-full h-16 object-cover text-4xl font-bold flex items-center justify-center"
                style={{
                    backgroundImage: `url( ${Logo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundsize: "contain",
                }}
            >
                Home
            </span>
            <div className="border-t-[0.5px] border-b-[0.5px] border-slate-500 my-2 p-2">
                <form onSubmit={handleSubmit}>
                    <textarea
                        type="text"
                        placeholder="What's Happening..."
                        className="h-28 w-full bg-transparent border-b-[0.5px] border-slate-300"
                        style={{ resize: "none" }}
                        value={tweet}
                        onChange={handleTweetChange}
                    />
                    {image && (
                        <div className="flex flex-row items-center gap-2 my-2">
                            <span className="font-medium">
                                <img className="w-full" src={image} alt="" />
                            </span>
                            <button
                                onClick={handleRemoveImage}
                                className="text-red-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-[10px]">
                            <div>
                                <label
                                    htmlFor="imageInput"
                                    className="cursor-pointer text-blue-400 flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                    <span className="text-sm ml-2">Image</span>
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    accept=".jpg, .jpeg, .png"
                                    id="imageInput"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </div>
                        </div>
                        <button
                            className="bg-blue-500/70 px-4 py-1 text-lg rounded-full font-medium"
                            type="submit"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
            <Posts />
        </div>
    );
};

export default Home;
