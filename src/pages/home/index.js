import React from "react"
import "./style.scss"

const Home = () => {
    return (
        <div className="page-home">
            <div className="brand-logo mt-30">Brand Logo</div>
            <div className="navs">
                <a href="/createnew" className="theme-btn f-bold">Create New</a>
                <a href="/search" className="theme-btn f-bold">Search</a>
                <a href="/dashboard" className="theme-btn f-bold">User Dashboard</a>
                <a href="/createreport" className="theme-btn f-bold">Create Report</a>
            </div>
        </div>
    )
}

export default Home