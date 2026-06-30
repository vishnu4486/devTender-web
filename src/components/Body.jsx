// import React, { useEffect } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import NavBar from "./NavBar";
// import Footer from "./Footer";
// import axios from "axios";
// import { BASE_URL } from "../utils/constent";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../utils/userSlice";

// const Body = () => {
//   const dispatch = useDispatch();
//   const navigation = useNavigate();
//   const userData = useSelector((store) => store.user);

//   const fetchUser = async () => {
//     try {
//       const user = await axios.get(BASE_URL + "/profile", {
//         withCredentials: true,
//       });
//       console.log(" ####",user)
//       dispatch(addUser(user.data));
//     } catch (err) {
//       if (err.status === 401) {
//         navigation("/login");
//       }
//          if (err.response?.status === 401) {
//         navigation("/login");
//       }
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     fetchUser();
//   }, []);
//   return (
//     <div>
//       <NavBar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default Body;

import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constent";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      const user = await axios.get(BASE_URL + "/profile", {
        withCredentials: true,
      });
      console.log(" ####",user)
      dispatch(addUser(user.data));
    } catch (err) {
      if (err.status === 401) {
        navigation("/login");
      }
         if (err.response?.status === 401) {
        navigation("/login");
      }
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;

