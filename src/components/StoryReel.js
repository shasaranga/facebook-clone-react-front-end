import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
        profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Sonny Sangha"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvCQG_TdV8rHMVOWV0wFsmzLgLQ6V32cfqQXg5yzZNY4h0BUGTUCDUWou9bTXTnsSI6A&usqp=CAU"
        profileSrc="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
        title="Rafash Qazi"
      />

      <Story
        image="https://media-api.xogrp.com/images/7c361793-d87e-4f4a-8c8e-cbfea6b0c577"
        profileSrc={
          "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-biracial-man-posing-picture-id1292475584?b=1&k=20&m=1292475584&s=170667a&w=0&h=jZ6etD3dfOV_NIgwR9hIQ5B9TBC5kpYxShIsaqjWbzc="
        }
        title="Frankie"
      />

      <Story
        image="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
        profileSrc={
          "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=170667a&w=0&h=Wo_7nESC_ePyEYfEsnOm-rP6ElkxbWqIB3Ga4W3nw8M="
        }
        title="Laksh Chathurwedi"
      />
      <Story
        image="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5"
        profileSrc={
          "https://i.pinimg.com/564x/1e/88/93/1e889313773c6f02fe21a878d73d437f.jpg"
        }
        title="Gwen"
      />
    </div>
  );
};

export default StoryReel;
