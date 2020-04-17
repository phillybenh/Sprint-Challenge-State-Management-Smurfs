import {
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAIL,
    POST_SMURFS_START,
} from "../actions";


const initialState = {
    newSmurf: [{ "name": "", "age": null, "height": "", "id": null },],
    isPosting: false,
    error: "",
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_SMURFS_START:
            return {
                ...state,
                isPosting: true
            };
        case POST_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false,
            };
        case POST_SMURFS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}