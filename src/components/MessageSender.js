import React, { useState, useRef } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import { InsertEmoticon, PhotoLibrary, Videocam, Done } from "@mui/icons-material";
import { useSelector } from "react-redux";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const MessageSender = ({ fetchData }) => {
  const user = useSelector((state) => state.user.authUser);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploaded, setUploaded ] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  const onChangeMessageInput = (e) => {
    setInput(e.target.value);
  };

  const onChangeImageURL = (e) => {
    setImageUrl(e.target.value);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleImageVideoChange = (event) => {
    const files = event.target.files;
    if (files.length === 0) {
      console.error("No File uploaded");
      return;
    }
    const file = files[0];

    if (file !== null) {
      const type = file.type.split("/")[0];
      if (type === "image") {
        setUploadedImage(file);
        setUploaded(true);
      } else if (type === "video") {
        setUploadedVideo(file);
        setUploaded(true);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    const formData = new FormData();
    if(uploadedImage != null){
      formData.append("uploadedImage", uploadedImage, uploadedImage.name);
    }

    if(uploadedVideo != null){
      formData.append("uploadedVideo", uploadedVideo, uploadedVideo.name);
    }
    
    
    formData.append("imageUrl", imageUrl ? imageUrl : null);
    formData.append("message", input);
    formData.append("userId", user.id);
    console.log("FORMDATA ---> ", formData);

    await axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/posts`,
      formData,
      {
        withCredentials: true,
      }
    );
    await fetchData();
    setInput("");
    setImageUrl("");
    setUploadedImage(null);
    setUploadedVideo(null);
    setUploaded(false);
    setIsProcessing(false);
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user && user.picture} />
        <form>
          <input
            value={input}
            onChange={onChangeMessageInput}
            type="text"
            className="messageSender__input"
            placeholder={`What's on your mind, ${user && user.fullName}?`}
          />
          <input
            type="text"
            placeholder="Image URL (Optional) "
            value={imageUrl}
            onChange={onChangeImageURL}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option" onClick={handleClick}>
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
          {uploaded && <Done />}
          <input
            type="file"
            accept="image/png,image/gif,image/jpeg,video/mp4,video/x-m4v,video/*"
            ref={hiddenFileInput}
            onChange={handleImageVideoChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
        {isProcessing && <div className="messageSender__loader">
        <ClipLoader loading/>
        </div>}
      </div>
    </div>
  );
};

export default MessageSender;
