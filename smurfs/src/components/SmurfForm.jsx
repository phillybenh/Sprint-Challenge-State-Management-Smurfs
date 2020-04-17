import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

// import actions
import { smurfPOSTAction } from "../store/actions/smurfPOSTAction";

const SmurfForm = (props) => {
  
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  //event handlers
  const inputChange = (event) => {
    event.preventDefault();
    const newFormData = {
      ...newSmurf,
      [event.target.name]: event.target.value,
    };
    setNewSmurf(newFormData);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    props.smurfPOSTAction(newSmurf);
  };
console.log(props)
  return (
    <>
      <h2>Enter a New Smurf:</h2>
      <div className="formContainer">
        {/* {props.isPosting && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )} */}
        {/* <form onSubmit={() => formSubmit()}> */}
        <form>
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

          <button
            className="submitBtn"
            onClick={props.smurfPOSTAction(newSmurf)}
          >
            Submit Smurf
          </button>
        </form>
        {props.error && <p>{props.error}</p>}
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   console.log("form state", state.smurfs);
//   return {
//     smurfs: state.smurfs.smurfs,
//     isPosting: state.smurfs.isFetching,
//     error: state.smurfs.error,
//     // newSmurf2: state.newSmurf
//   };
// };
// mapStateToProps

export default connect(null, { smurfPOSTAction })(
  SmurfForm
);

// id: Date.now()
