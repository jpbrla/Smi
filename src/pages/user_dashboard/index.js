import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import "./style.scss"

const UserDashboardPage = () => {
    return (
        <div className="page-dashboard">
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <div className="w-100 d-flex justify-content-center mt-20">
                <p className="w-75 py-10 bg-prim text-center fs-25 f-bold fc-white">User Dashboard</p>
            </div>
            <div className="d-flex flex-column mt-20">
                <div className="d-flex flex-column">
                    <p className="w-100 text-center fs-20 fc-black">SMIs Saved to Draft</p>
                    <p className="w-100 text-center fs-16 fc-grey f-regular-italic">Draft SMIs are deleted after 30 days</p>
                    <button className="d-flex justify-content-around align-items-center border-none bg-white mt-10" onClick={() => window.location.href = "/statusreport"}>
                        <span>11106</span>
                        <span>Automating Floor Panels</span>
                        <span><ChevronRight size={15} /></span>
                    </button>
                </div>
            </div>
            <div className="d-flex flex-column mt-50">
                <div className="d-flex flex-column">
                    <p className="w-100 text-center fs-20 fc-black">SMIs Submitted</p>
                    <button className="d-flex justify-content-around align-items-center border-none bg-white mt-10" onClick={() => window.location.href = "/statusreport"}>
                        <span>11106</span>
                        <span>Automating Floor Panels</span>
                        <span><ChevronRight size={15} /></span>
                    </button>
                </div>
            </div>
            <div className="d-flex flex-column mt-50">
                <div className="d-flex flex-column">
                    <p className="w-100 text-center fs-20 fc-black">SMIs In Progress</p>
                    <button className="d-flex justify-content-around align-items-center border-none bg-white mt-10" onClick={() => window.location.href = "/statusreport"}>
                        <span>11106</span>
                        <span>Automating Floor Panels</span>
                        <span><ChevronRight size={15} /></span>
                    </button>
                </div>
            </div>
            <div className="d-flex flex-column mt-50">
                <div className="d-flex flex-column">
                    <p className="w-100 text-center fs-20 fc-black">SMIs Implemented</p>
                    <button className="d-flex justify-content-around align-items-center border-none bg-white mt-10" onClick={() => window.location.href = "/statusreport"}>
                        <span>11106</span>
                        <span>Automating Floor Panels</span>
                        <span><ChevronRight size={15} /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserDashboardPage