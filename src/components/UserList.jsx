import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constent";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const UserList = ({ feedList }) => {
  const disptch = useDispatch();
  const handleRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        {
          withCredentials: true,
        },
      );
      // disptch(addUser(res))
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-2">
      {feedList?.map(
        ({
          _id,
          firstName,
          lastName,
          emailId,
          age,
          gender,
          skills,
          about,
          photoUrl,
        }) => (
          <div key={_id} className="card bg-base-200 w-96 shadow-sm">
            <figure>
              <img
                src={photoUrl}
                alt={`${firstName} ${lastName}`}
                className="h-72 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {firstName} {lastName}
              </h2>

              <p>{about}</p>

              <p>
                <strong>Age:</strong> {age || "Not added"}
              </p>

              <p>
                <strong>Gender:</strong> {gender || "Not added"}
              </p>

              <div>
                <strong>Skills:</strong>

                {skills?.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill) => (
                      <span key={skill} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No skills</p>
                )}
              </div>

              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => handleRequest("interested", _id)}
                >
                  Interested
                </button>

                <button
                  className="btn btn-outline btn-error"
                  onClick={() => handleRequest("ignore", _id)}
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default UserList;
