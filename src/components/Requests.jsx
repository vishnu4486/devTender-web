import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constent";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requestData = useSelector((store) => store.request);

  const gerRequestReceved = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/request/recived`, {
        withCredentials: true,
      });

      dispatch(addRequest(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gerRequestReceved();
  }, []);

  const requestResponse = async (status, id) => {
    try {
      const res = await axios.post(`${BASE_URL}/request/send/${status}/${id}`, {
        withCredentials: true,
      });
      console.log("Request respose res", res);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="flex justify-center flex-col ">
      <h1 className="text-center">Connection Request</h1>
      {requestData?.map((connect, index) => {
        return (
          <div
            className="bg-amber-100 p-5 border-2 m-2 w-1/2 mx-auto"
            key={index}
          >
            <h1>
              {connect.firstName} {connect.lastName}
            </h1>

            <p>{connect.age}</p>
            <p>{connect.gender}</p>
            {connect?.skills?.map((skill) => {
              return <li>{skill}</li>;
            })}
            <h1>{connect.about}</h1>

            <div className="card-actions justify-end mt-4">
              <button
                className="btn btn-primary"
                onClick={() => requestResponse("interested", connect._id)}
              >
                Accepat
              </button>

              <button
                className="btn btn-outline btn-error"
                onClick={() => requestResponse("rejected", connect._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
