import RepositoryActionTypes from "./RepositoryActionTypes";

const initialState = {
    repoList:[]
};

const RepositoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case RepositoryActionTypes.FETCH_DATA:
            return {
                ...state
            };
        case RepositoryActionTypes.SET_DATA:
            return {
                ...state, repoList : action.payload
            };
        default:
            return state;
    }
};

export default RepositoryReducer;
