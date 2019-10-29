import React from "react";
import { connect } from "react-redux";
import RepositoryActions from "./redux/RepositoryActions";
import { withRouter } from "react-router-dom";

class RepositoryList extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getRepoList();
    }

    render(){
        return (
            <div>
                { this.props.repoList ? this.props.repoList.map( item => { return item.name }) : "" }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    repoList: state.repository.repoList
});

const mapDispatchToProps = dispatch => ({
    getRepoList: () => {
        dispatch(RepositoryActions.getData());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(RepositoryList));
