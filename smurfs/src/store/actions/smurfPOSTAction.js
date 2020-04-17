import axios from 'axios';

export const POST_SMURF = "POST_SMURF";

export const smurfPOSTAction = newSmurf => {

    return dispatch => {
        dispatch({ type: 'POST_SMURF' });

        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
                console.log(" post response", response)
                
            })
            // .catch(error => {
            //      console.log("error", error)
            //     // dispatch({
            //     //     type: 'POST_SMURFS_FAIL',
            //     //     payload: `${error}`
            //     // })
            // })

    }
}