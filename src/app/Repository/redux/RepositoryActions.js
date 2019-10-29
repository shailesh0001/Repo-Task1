import RepositoryActionTypes from "./RepositoryActionTypes";
import API from "../../utils/API";
import URL from "../../utils/URL";

const RepositoryActions = {
    getData: () => dispatch => {
        API.get(URL.REPO.HOME).then(response =>
            dispatch(RepositoryActions.setData(response.data)),
        );
    },

    setData: payload => ({ type: RepositoryActionTypes.SET_DATA, payload })
};

export default RepositoryActions;
