import { combineReducers } from "redux";

import authentication from "./authentication/redux/AuthenticationReducer";
import repository from "./Repository/redux/RepositoryReducer";

export default combineReducers({
    authentication,
    repository
});
