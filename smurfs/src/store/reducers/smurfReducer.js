const initialState = {
    smurfs: [
        { "name": "Test", "age": 200, "height": "5cm", "id": 99 },
    ],
    isFetching: false,
    error: "",
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}