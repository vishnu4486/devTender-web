import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constent";
import UserList from "./UserList";
import { useDispatch, useSelector } from "react-redux";
import { addConncection } from "../utils/connectionSlice";

const Connection = () => {
  const dispatch = useDispatch();
  const connectionList = useSelector((store) => store.connection);
  const fetchConnection = async () => {
    try {
      
      const res = await axios.get(`${BASE_URL}/user/connections/`, {
        withCredentials: true,
      });
      console.log("res", res.data.data);
      dispatch(addConncection(res.data.data));
    } catch (erro) {
      console.log(erro);
    }
  };
  useEffect(() => {
    fetchConnection();
  }, []);
  return (
    <div className="flex justify-center flex-col ">
      <h1 className="text-center">Connection</h1>
      {connectionList?.map((connect) => {
        return (
          <div className="bg-amber-100 p-5 border-2 m-2 w-1/2 mx-auto">
            <h1>{connect.firstName} {connect.lastName}</h1>
            
            <p>{connect.age}</p>
            <p>{connect.gender}</p>
            {connect.skills.map((skill) => {
              return <li>{skill}</li>;
            })}
            <h1>{connect.about}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Connection;
