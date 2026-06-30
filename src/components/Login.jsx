import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constent";

const Login = () => {
  const [emailId, setEmailId] = useState("vsb@gmail.com");
  const [password, setPassword] = useState("Ind@1234");
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogin = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );
      console.log("res", res);
      dispatch(addUser(res.data.data));
      navigate("/");
    } catch (err) {
       console.log("Login Error:", err);

    setError(
      err?.response?.data?.message ||
      err?.response?.data ||
      "Something went wrong"
    );
    }
  };
  return (
    <div className="flex justify-center align-middle my-40">
      <div className="card card-dash bg-base-200 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Id</legend>
            <input
              type="text"
              className="input"
              placeholder="Please enter the emailid"
              onChange={(e) => setEmailId(e.target.value)}
              value={emailId}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <p className="text-red-500">{error} </p>
          <div className="card-actions justify-center m-5">
            <button className="btn btn-primary" onClick={handelLogin}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
