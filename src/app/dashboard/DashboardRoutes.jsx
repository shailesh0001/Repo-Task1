import React from "react";
import { Route } from "react-router-dom";
import AttendanceReport from "./attendance-report/AttendanceReportContainer";
import LiveSessions from "./live-sessions/LiveSessionContainer";
import SessionReport from "./session-report/SessionReportContainer";

const DashboardRoutes = () => {
    return (
      <div>
        <Route path="/dashboard/live-sessions" component={LiveSessions} />
        <Route path="/dashboard/attendance" component={AttendanceReport} />
        <Route path="/dashboard/sessions" component={SessionReport} />
      </div>
    );
};

export default DashboardRoutes;
