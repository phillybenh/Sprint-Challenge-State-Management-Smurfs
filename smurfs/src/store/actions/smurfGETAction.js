import axios from 'axios';

export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";


export const smurfGETAction = () => {

    return dispatch => {
        dispatch({ type: 'FETCH_SMURFS_START' });

        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                // console.log("response",response)
                dispatch({
                    type: 'FETCH_SMURFS_SUCCESS',
                    payload: response.data
                })
            })
            .catch(error => {
                // console.log("error", error)
                dispatch({
                    type: 'FETCH_SMURFS_FAIL',
                    payload: `${error}`
                })
            })

    }
}
