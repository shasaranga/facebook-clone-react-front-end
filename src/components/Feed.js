import React, { useState, useEffect, Fragment } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import axios from "axios";
import Loader from "../shared/components/Loader";

import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../app/config/firebaseConfig";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/posts`, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log("Posts Retrieval Error!", err);
      });

      const result = [];
      for(const post of  response.data){
        let imageUrl = null;
        let videoUrl = null;

        if(post.uploadedImage != null){
          const fileName= post.uploadedImage;
          imageUrl  = await getDownloadURL(ref(storage, fileName))
          .catch((error) => {
            console.log("Error While fetching image url: ", error);
          });
        }
        if(post.uploadedVideo != null){
          const fileName= post.uploadedVideo;
          console.log("VIDEO --> ",fileName)
          videoUrl  = await getDownloadURL(ref(storage, fileName))
          .catch((error) => {
            console.log("Error While fetching video url: ", error);
          });
        }

        result.push({
          ...post,
          uploadedImage: imageUrl,
          uploadedVideo: videoUrl
        })
      }        
    setPosts(result);
    setIsLoading(false);
  }
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <div className="feed">
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <StoryReel />
          <MessageSender fetchData={fetchData} />

          {posts &&
            posts.map((post) => (
              <Post
                key={post.id}
                profilePic={post.profilePic}
                message={post.message}
                timestamp={post.timestamp}
                image={post.imageUrl}
                username={post.username}
                uploadedImage={post.uploadedImage}
                uploadedVideo={post.uploadedVideo}
              />
            ))}
        </Fragment>
      )}
    </div>
  );
};

export default Feed;
