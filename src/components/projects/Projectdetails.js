import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Project Title - {id} </h5>
          <p className="card-text">
            mnbmnbmnbmnbm mbmnbnmb mnbnmbnmbmnbmnb nmbmnbmnbmnnmbnmbnm mbmbmnb
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
