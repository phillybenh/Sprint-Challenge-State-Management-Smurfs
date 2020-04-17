import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

// import actions
import { smurfGETAction, smurfPOSTAction } from "../store/actions";

const SmurfForm = (props) => {
  // useEffect to  load smurfs on page load/refresh
  //   useEffect(() => {
  //     props.smurfGETAction();
  //   }, []);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: null,
    height: "",
    id: null,
  });
  const [post, setPost] = useState([]);

  //event handlers
  const inputChange = (event) => {
    event.persist();
    const newFormData = {
      ...newSmurf,
      [event.target.name]: event.target.value,
    };
    setNewSmurf(newFormData);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    smurfPOSTAction(newSmurf);
  };

  return (
    <>
      <h2>Enter a New Smurf:</h2>
      <div className="formContainer">
        {props.isPosting && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}
        <form onSubmit={formSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={newSmurf.name}
            onChange={inputChange}
          />
          <label htmlFor="age">Age: </label>
          <input
            id="age"
            type="text"
            name="age"
            value={newSmurf.age}
            onChange={inputChange}
          />
          <label htmlFor="height">Height: </label>
          <input
            id="height"
            type="text"
            name="height"
            value={newSmurf.height}
            onChange={inputChange}
          />

          <button className="submitBtn">Submit Smurf</button>
        </form>
        {props.error && <p>{props.error}</p>}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.smurfs);
  return {
    smurfs: state.smurfs.smurfs,
    isPosting: state.smurfs.isFetching,
    error: state.smurfs.error,
  };
};

export default connect(mapStateToProps, { smurfGETAction, smurfPOSTAction })(
  SmurfForm
);

// id: Date.now()
