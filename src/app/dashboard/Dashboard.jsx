import React from "react";
import { Header, Footer } from "./common";
import DashboardRoutes from "./DashboardRoutes";

import "./styles/dashboard.scss";

const DashboardContainer = () => {
    return (
      <div className={DashboardContainer.styles.root}>
        <Header />
        <div className={DashboardContainer.styles.content}>
          <DashboardRoutes />
        </div>
        <Footer />
      </div>
    );
};

DashboardContainer.styles = {
    root: "nos-ds__dashboard-root",
    content: "nos-ds__dashboard-content"
};

export default DashboardContainer;

// DashboardContainer.propTypes = {
//     dashboard: PropTypes.object.isRequired,
//     getAuthenticationToken: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//     dashboard: state.dashboard,
// });

// const mapDispatchToProps = dispatch => ({
//     getAuthenticationToken: () => {
//         dispatch(DashboardActions.getData());
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(DashboardContainer);

// import PropTypes from "prop-types";
// import { connect } from "react-redux";

// import DashboardActions from "./redux/DashboardActions";

// import Home from "./views/Home";

//     const { dashboard, getAuthenticationToken } = props;

//     useEffect(() => getAuthenticationToken(), [getAuthenticationToken]);

//     return <Home greeting={dashboard.greeting} name={dashboard.name} />;
