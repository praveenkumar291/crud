import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalState";
import Practise from "./components/Practise";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/add" exact element={<AddUser />} />
            <Route path="/pra" exact element={<Practise />} />

            <Route path="/edit/:id" exact element={<EditUser />} />

            <Route>404 Not found</Route>
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
