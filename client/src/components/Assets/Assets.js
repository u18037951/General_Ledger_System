import React from "react";
import SideBar from "../SideBar";
import AddAssets from "./AddAssets";
const Assets = ({ user }) => {
    return (
        <div className="wrapper">
            <SideBar/>

            <div id="content">
                <AddAssets/>

            </div>
        </div>
    );
};

export default Assets;