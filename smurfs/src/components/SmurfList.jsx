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

{
  /*
    import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchAdvice } from "../Store/Actions/adviceActions";
import {fetchCat} from "../Store/Actions/catActions"

const RandomAdvice = (props) => {
  useEffect(() => {
    props.fetchAdvice();
    props.fetchCat();
  }, []);
console.log("props", props)
  return (
    <div>
      <h2>Here's the random tip you need:</h2>
      <div className="adviceContainer">
        {props.isFetching && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}
        {props.advice && <h3>"{props.advice}"</h3>}
        {props.error && <p>{props.error}</p>}
        <button onClick={props.fetchAdvice}>Try a new tip!</button>
        <h3>Maybe that tip was useless. This cat is sorry.</h3>
        <img src={props.cat} alt="Random image of a cat" />
        <button onClick={props.fetchCat}>Try a new cat!</button>
      </div>
      <footer>
        <p>
          Thanks to{" "}
          <a href="https://api.adviceslip.com">Advice Slip JSON API</a> for
          supplying the advice.
        </p>
      </footer>
    </div>
  );
};


);
*/
}
