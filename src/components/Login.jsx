import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constent";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const[isLoggin,setIsLoggin]=useState(true) 
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogin = async () => {
    try {

      if(isLoggin){
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
      dispatch(addUser(res.data.data));
      navigate("/");
      }else{
const res = await axios.post(
        `${BASE_URL}/signup`,
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
      //  setIsLoggin(true)
      //  setError("")
      //  setEmailId("");
      //  setPassword("")
      //  setFirstName("")
      //  setLastName("")
      }
  
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
          <h2 className="card-title justify-center">{isLoggin ?"Login" :"Sign Up"}</h2>

          {
            !isLoggin &&<>
                      <fieldset className="fieldset">
            <legend className="fieldset-legend">First name</legend>
            <input
              type="text"
              className="input"
              placeholder="Please enter the emailid"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </fieldset>

                    <fieldset className="fieldset">
            <legend className="fieldset-legend">Last name </legend>
            <input
              type="text"
              className="input"
              placeholder="Please enter the emailid"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </fieldset>
            
            </>
          }
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
          <div className="card-actions justify-center m-5 flex-col">
            <button className="btn btn-primary" onClick={handelLogin}>
             {isLoggin ?"Login" :"Sign Up"}
            </button>
            <p
  className="text-center text-primary cursor-pointer mt-4 hover:underline"
  onClick={() => setIsLoggin((value) => !value)}
>
  {isLoggin
    ? "Don't have an account? Sign up"
    : "Already have an account? Log in"}
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
