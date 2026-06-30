import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Connection from "./components/Connection";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Requests from "./components/Requests";

function App() {
  return (
    <>
    <Provider store={appStore}>

   
      <BrowserRouter basename="/">

        <Routes>
          <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/connection" element={<Connection />}></Route>
          <Route path="/requests" element={<Requests />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
       </Provider>
    </>
  );
}

export default App;
