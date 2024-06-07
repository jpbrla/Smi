import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import "./style.scss"

const UserDashboardPage = () => {
    return (
        <div className="page-dashboard px-10">
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <div className="w-100 d-flex justify-content-center mt-20">
                <p className="w-75 py-10 bg-prim text-center fs-25 f-bold fc-white">User Dashboard</p>
            </div>
            <div className="d-flex flex-column mt-20">
                <div className="d-flex flex-column">
                    <p className="w-100 text-center fs-20 fc-black">Saved to Draft</p>
                    <p className="w-100 text-center fs-16 fc-grey f-regular-italic">Draft SMIs are deleted after 30 days</p>
                    <button className="d-flex justify-content-between align-items-center border-none bg-white mt-10 px-40" onClick={() => window.location.href = "/statusreport"}>
                        <span className="fc-green">12345</span>
                        <span>Example SMI title that's quite long.</span>
                        <span><ChevronRight size={15} /></span>
                    </button>
                </div>
            </div>
            
            <div className="d-flex flex-column mt-50">
                <div className="d-flex flex-column">
                    <p className="w-100 text-center fs-20 fc-black">Submitted for Owner Assignment</p>
                    <button className="d-flex justify-content-between align-items-center border-none bg-white mt-10 px-40" onClick={() => window.location.href = "/statusreport"}>
                        <span className="fc-orange">67890</span>
                        <span>This is just a test name</span>
                        <span><ChevronRight size={15} /></span>
                    </button>
                </div>
            </div>
         
            <div className="d-flex flex-column mt-50">
                <div className="d-flex flex-column">
                    <p className="w-100 text-center fs-20 fc-black">In Progress</p>
                    <button className="d-flex justify-content-between align-items-center border-none bg-white mt-10 px-40" onClick={() => window.location.href = "/statusreport"}>
                        <span className="fc-red">22331</span>
                        <span>Automating Floor Panels</span>
                        <span><ChevronRight size={15} /></span>
                    </button>
                </div>
            </div>
           
            <div className="d-flex flex-column mt-50">
                <div className="d-flex flex-column">
                    <p className="w-100 text-center fs-20 fc-black">Not Implemented</p>
                    <button className="d-flex justify-content-between align-items-center border-none bg-white mt-10 px-40" onClick={() => window.location.href = "/statusreport"}>
                        <span className="fc-primary">8423</span>
                        <span>Automating Floor Panels</span>
                        <span><ChevronRight size={15} /></span>
                    </button>
                </div>
            </div>
            <div className="d-flex flex-column mt-50">
                <div className="d-flex flex-column">
                    <p className="w-100 text-center fs-20 fc-black">Implemented</p>
                    <button className="d-flex justify-content-between align-items-center border-none bg-white mt-10 px-40" onClick={() => window.location.href = "/statusreport"}>
                        <span>44444</span>
                        <span>Older SMI that has been implemented</span>
                        <span><ChevronRight size={15} /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserDashboardPage