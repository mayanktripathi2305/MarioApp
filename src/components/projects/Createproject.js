import React, { useState } from "react";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Project Details", title, description);
  };
  return (
    <div className="container">
      <form>
        <h3>Add New Project</h3>
        <div className="form-group">
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            onChange={handleTitle}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="description">Project Description</label>
          <textarea
            id="description"
            className="form-control"
            onChange={handleDescription}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
