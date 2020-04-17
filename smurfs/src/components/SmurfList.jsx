import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

// import actions
import { smurfGETAction } from "../store/actions";

const SmurfList = (props) => {
  // useEffect to  load smurfs on page load/refresh
  useEffect(() => {
    props.smurfGETAction();
  }, []);

  return (
    <>
      <h2>Smurf List:</h2>
      <div className="listContainer">
        {props.isFetching && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}
        {props.smurfs &&
          props.smurfs.map((smurf) => (
            <div className="smurfCard" key={smurf.id}>
              <h3>Name: {smurf.name}</h3>
              <ul>
                <li>Age: {smurf.age}</li>
                <li>Height: {smurf.height}</li>
              </ul>
            </div>
          ))}
        {props.error && <p>{props.error}</p>}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.smurfs);
  return {
    smurfs: state.smurfs.smurfs,
    isFetching: state.smurfs.isFetching,
    error: state.smurfs.error,
  };
};

export default connect(mapStateToProps, { smurfGETAction })(SmurfList);
