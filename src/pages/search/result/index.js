import React from "react"
import AccordionItem from "components/Accordion/item"
import { Accordion } from "@szhsin/react-accordion"
import { ArrowReturnRight } from "react-bootstrap-icons"
import ArrowReturnLeft from "resources/arrow-return.png"
import "./style.scss"

const SearchResultPage = () => {
    return (
        <div className="page-result px-10">
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <p className="f-bold fs-20 fc-primary text-center mt-20 title-border py-1">Search Results</p>
            <Accordion transition transitionTimeout={250} className="mt-3">
            {
                [1,2,3,4,5,6,7].map((_, i) =>
                    <AccordionItem key={i}>
                        <div className="list-detail">
                            <ArrowReturnRight size={20} className="fc-darkgrey" />
                            <div className="d-flex flex-column bordered border-darkgrey rounded-2 w-100 px-2 py-1">
                                <div className="d-flex">
                                    <span className="fs-14">11106</span>
                                    <p className="fs-14 w-100 text-center">Really long title example</p>
                                </div>
                                <hr/>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">SMI Number</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">11106</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Date Created</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">02/01/24</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Date Updated</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">02/02/24</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Title</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">Example title about automating the upgrading of floor panels</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Originator</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">Sample OriginatorName</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Additional Originator(s)</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">Firstname Lastname, Originator Nametwo</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Owner</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">Sample OwnerName</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Assigned to Owner</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">02/02/24</p>
                                </div>

                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Division</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">BLA</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Department</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">Office Services</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Improvement Area</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">Automation</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Description</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">Set up notice to upgrade floor panels every 7 months. Just another sentence to showcase full area of description field.</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Cost Savings</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">$1456.00</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Stage</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">Implemented on 03/08/24</p>
                                </div>
                                <div className="d-flex justify-content-center my-20">
                                    <button type="button" onClick={() => window.location.href = "/statusreport"}>Open Full Details</button>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>
                )
            }
            </Accordion>
            <div className="d-flex justify-content-center mt-40">
                <button className="search-btn d-flex justify-content-center align-items-center"><img src={ArrowReturnLeft} alt="" className="return-icon" />REVISE SEARCH</button>
            </div>
        </div>
    )
}

export default SearchResultPage