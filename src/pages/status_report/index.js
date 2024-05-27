import React from "react";

const StatusReportPage = () => {
    return (
        <div className="page-status">
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <div className="w-100 d-flex justify-content-center mt-20">
                <p className="w-50 py-10 bg-lightgrey text-center fs-20">Status Report</p>
            </div>
            <div className="d-flex flex-column mt-20">
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Number</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">11106</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Date Updated</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">02/02/24</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Create Date</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">02/01/24</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Title</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Example title about automating the upgrading of floor panels</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Name</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Sample Name</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Assigned</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">02/02/24</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Names</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Firstname Lastname, Originator Nametwo</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Abber</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">ADD</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Department</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Office Services</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Area</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Automation</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Description</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Set up notice to upgrade floor panels every 7 months. Just another sentence to showcase full area of description field.</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Images</p>
                    <div className="w-60 d-flex flex-column">
                        <p className="fs-12 w-100 f-regular-italic fc-primary">1. image001.png</p>
                        <p className="fs-12 w-100 f-regular-italic fc-primary">2. image002.png</p>
                    </div>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Additional Documents</p>
                    <div className="w-60 d-flex flex-column">
                        <p className="fs-12 w-100 f-regular-italic fc-primary">1. audiofile.mp3</p>
                        <p className="fs-12 w-100 f-regular-italic fc-primary">2. videofile.mp4</p>
                        <p className="fs-12 w-100 f-regular-italic fc-primary">3. worddoc.docx</p>
                        <p className="fs-12 w-100 f-regular-italic fc-primary">4. excel.xlsx</p>
                    </div>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Annual Cost Savings</p>
                    <p className="fs-14 w-60 f-bold fc-green">$1,234.56</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-bold fc-black">Notifications</p>
                    <div className="w-60 d-flex flex-column">
                        <p className="fs-12 f-regular-italic fc-darkgrey">Upcoming Dates</p>
                        <div className="d-flex mt-1">
                            <span className="fs-12 fc-white bg-green px-1">30 Day</span>
                            <span className="fs-12 ml-10 fc-grey">02/29/24</span>
                        </div>
                        <div className="d-flex mt-1">
                            <span className="fs-12 fc-white bg-orange px-1">60 Day</span>
                            <span className="fs-12 ml-10 fc-grey">03/30/24</span>
                        </div>
                        <div className="d-flex mt-1">
                            <span className="fs-12 fc-white bg-red px-1">90 Day</span>
                            <span className="fs-12 ml-10 fc-grey">04/30/24</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center mt-50">
                <p className="w-50 py-10 bg-lightgrey text-center fs-20">SMI Action History</p>
            </div>
            <div className="d-flex flex-column mt-20">
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-regular fc-darkgrey">02/02/24</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Assigned to Owner</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-regular fc-darkgrey">02/03/24</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Due to Implementation</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-regular fc-darkgrey">02/04/24</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Implemented</p>
                </div>
                <div className="d-flex">
                    <p className="fs-12 w-40 text-end pr-10 f-regular fc-darkgrey">02/05/24</p>
                    <p className="fs-12 w-60 f-regular fc-darkgrey">Closed</p>
                </div>
            </div>
        </div>
    )
}

export default StatusReportPage