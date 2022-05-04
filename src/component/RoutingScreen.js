import { Route, Routes } from "react-router-dom";

import React from "react";
import Home from "../views/Home";
import Create from "../views/Create";
import Edit from "../views/Edit";
import Details from "../views/Details";

const RoutingScreen = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
        </Routes>
    )
}

export default RoutingScreen