import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constent";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [skills, setSkills] = useState(user?.skills?.join(", ") || "");
  const [_id] = useState(user?._id || 0 );

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdateProfile = async () => {
    try {
      setError("");
      setSuccess("");
      const res = await axios.put(
        `${BASE_URL}/profile/${_id}`,
        {
          firstName,
          lastName,
          age: Number(age),
          gender,
          about,
          photoUrl,
          skills: skills.split(",").map((skill) => skill.trim()),
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data.data));
      setSuccess("Profile updated successfully");
    } catch (err) {
      console.log("Update Profile Error:", err);
      setError(
        err?.response?.data?.error  || err?.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-200 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>

          {photoUrl && (
            <div className="flex justify-center my-4">
              <img
                src={photoUrl}
                alt="profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-primary"
              />
            </div>
          )}

          <label className="form-control">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Age</span>
            </div>
            <input
              type="number"
              className="input input-bordered"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Gender</span>
            </div>
            <select
              className="select select-bordered"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="femal">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">About</span>
            </div>
            <textarea
              className="textarea textarea-bordered"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Skills</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              placeholder="react, node, mongodb"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </label>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary" onClick={handleUpdateProfile}>
              Update Profile
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EditProfile;