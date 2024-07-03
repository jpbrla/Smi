import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import AccordionItem from "components/Accordion/item"
import { Accordion } from "@szhsin/react-accordion"
import { ArrowReturnRight } from "react-bootstrap-icons"
import ArrowReturnLeft from "resources/arrow-return.png"
import "./style.scss"

const SearchResultPage = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const {queries, result} = state

    const formatDate = (value) => {
        let date = new Date(value);
        const day = date.toLocaleString('default', { day: '2-digit' });
        const month = date.toLocaleString('default', { month: '2-digit' });
        const year = date.toLocaleString('default', { year: '2-digit' });
        return month + '/' + day + '/' + year;
    }

    const numberFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const reviseSearch = (e) => {
        window.history.replaceState({},'')
        navigate("/search", { state: { queries } })
    }

    const goToReportPage = (data) => {
        axios.post("/getAttachments", { req_id: data.id })
            .then((res) => {
                let merged_result = {...data, attachments: res.data.data}
                navigate("/statusreport", { state: merged_result })
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="page-result px-10">
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <p className="f-bold fs-20 fc-primary text-center mt-20 title-border py-1">Search Results</p>
            <Accordion transition transitionTimeout={250} className="mt-3">
            {
                result.map((value, i) =>
                    <AccordionItem key={i} req_no={value.req_no} title={value.title}>
                        <div className="list-detail">
                            <ArrowReturnRight size={20} className="fc-darkgrey" />
                            <div className="d-flex flex-column bordered border-darkgrey rounded-2 w-100 px-2 py-1">
                                <div className="d-flex">
                                    <span className="fs-14">{value.req_no}</span>
                                    <p className="fs-14 w-100 text-center">{value.title}</p>
                                </div>
                                <hr/>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">SMI Number</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.req_no}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Date Created</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{formatDate(value.created_date)}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Date Updated</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey"></p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Title</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.title}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Originator</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.originator}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Additional Originator(s)</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.additional_originators}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Owner</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.owner}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Assigned to Owner</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey"></p>
                                </div>

                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Division</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.division}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Department</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.department}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Improvement Area</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.improvement_area}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Description</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.description}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Cost Savings</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{numberFormatter.format(parseFloat(value.cost_saving_amnt))}</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Stage</p>
                                    <p className="fs-14 w-60 f-regular fc-darkgrey">{value.stage}</p>
                                </div>
                                <div className="d-flex justify-content-center my-20">
                                    <button type="button" onClick={() => goToReportPage(value)}>Open Full Details</button>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>
                )
            }
            </Accordion>
            <div className="d-flex justify-content-center mt-40">
                <button className="search-btn d-flex justify-content-center align-items-center" onClick={reviseSearch}><img src={ArrowReturnLeft} alt="" className="return-icon" />REVISE SEARCH</button>
            </div>
        </div>
    )
}

export default SearchResultPage