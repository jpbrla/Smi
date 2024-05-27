import React from "react";
import "./style.scss"

const ThankPage = () => {
    return (
        <div className="page-thank">
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <div className="mt-30 d-flex flex-column py-20 px-3 bordered-2 border-grey rounded-4">
                <p className="w-100 text-center fs-25 fc-primary f-bold">Thanks!</p>
                <p className="w-100 text-center fs-18 mt-30">Your SMI has been created.</p>
                <p className="w-100 text-center fs-18 mt-30 lh-sm">Please see your confirmation email or your User Dashboard to make any updates.</p>
            </div>
            <div className="d-flex justify-content-center">
                <button className="submit-btn mt-20" onClick={() => window.location.href = "/dashboard"}>Go to User Dashboard</button>
            </div>
        </div>
    )
}

export default ThankPage