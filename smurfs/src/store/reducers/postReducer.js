
import {initialState} from "./smurfReducer";
import { POST_SMURF } from "../actions";
/////
// const [newSmurf, setNewSmurf] = useState({
//     name: "",
//     age: null,
//     height: "",
//     id: null,
// });
// const [post, setPost] = useState([]);
////

// const initialState = {
//     newSmurf: [{ "name": "", "age": null, "height": "", "id": null },],
//     isPosting: false,
//     error: "",
// }

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        // case POST_SMURFS_START:
        //     return {
        //         ...state,
        //         isPosting: true
        //     };
        case POST_SMURF:
            return {
                ...state,
                // smurfs: 
                //     ...state.smurfs, action.payload,
                // isPosting: false,
            };
        // case POST_SMURFS_FAIL:
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: action.payload
        //     };
        default:
            return state;
    }
}
