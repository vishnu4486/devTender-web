import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constent";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserList from "./UserList";

const Feed = () => {
  const dispatch = useDispatch();
  const feedList = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      if (feedList) return;

      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });

      console.log("API Feed:", res.data.data);

      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.log("Feed API Error:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  console.log("Redux Feed:", feedList);

  return (
    <div className="flex justify-items-center justify-center">
      <UserList feedList={feedList}/>
    </div>
  );
};

export default Feed;