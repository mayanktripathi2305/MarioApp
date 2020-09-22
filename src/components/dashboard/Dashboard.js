import React from "react";
import Projectlist from "../projects/Projectlist";
import Notifications from "./Notifications";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Projectlist />
        </div>

        <div className="col-sm-12 col-md-5 col-offset-m-1 ">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
