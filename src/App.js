import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add" exact element={<AddUser />} />
          <Route path="/edit/:id" exact element={<EditUser />} />

          <Route>404 Not found</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
