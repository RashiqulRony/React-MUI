import * as React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import Orders from "../components/Orders";

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/orders' element={<Orders />} />
        </Routes>
    );
}

export default Router