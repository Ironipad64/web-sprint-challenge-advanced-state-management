import axios from 'axios';

export const FETCH_ADD_SMURF_SUCCESS = "FETCH_STATE_LOADING"
export const FETCH_ADD_SMURF_LOADING = "FETCH_ADD_SMURF_LOADING"
export const FETCH_ADD_SMURF_ERROR = "FETCH_STATE_ERROR"



export const getSmurf = () => {
    return dispatch => {
        dispatch(fetch)

        axios.get("http://localhost:3333/smurfs")
            .then(res => {
                dispatch(fetchAddSmurfSuccess(res.data.quote));
            })
            .catch(err => {
                dispatch(fetchAddSmurfError(err.Response.code));
            });

    }
}


export const fetchAddSmurfSuccess = (smurf) => {
    return ({ type: FETCH_ADD_SMURF_SUCCESS, payload: smurf })
}

export const fetchAddSmurfLoading = () => {
    return ({ type: FETCH_ADD_SMURF_LOADING });
}

export const fetchAddSmurfError = (errorMessage) => {
    return ({ type: FETCH_ADD_SMURF_ERROR, payload: errorMessage })
}






//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.