import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "./Body";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Connection from "./components/Connection";
import Profile from "./components/Profile";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter basename="/">

        <Routes>
          <Route path="/" element={<Body />}>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/connection" element={<Connection />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
