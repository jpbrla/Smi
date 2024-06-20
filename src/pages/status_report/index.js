import React, {useState} from "react";
import { smiStageList } from "resources/data";
import { TypeBold, TypeItalic, TypeUnderline, ListOl, ListUl } from "react-bootstrap-icons"
import "./style.scss"

const StatusReportPage = () => {
    // const [isStageDropdownOpen, setStageDropdownOpen] = useState(false)
    const [stage, setStage] = useState('')
    const [stageUpdateNote, setStageUpdateNote] = useState('')
    const [isTypeBold, setTypeBold] = useState(false)
    const [isTypeItalic, setTypeItalic] = useState(false)
    const [isTypeUnderline, setTypeUnderline] = useState(false)
    const [isListOl, setListOl] = useState(false)
    const [isListUl, setListUl] = useState(false)
    return (
        <div className="page-status px-10">
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <div className="w-100 d-flex justify-content-center mt-20">
                <p className="w-50 py-10 bg-lightgrey text-center fs-20">SMI Status Report</p>
            </div>
            <div className="d-flex flex-column mt-20">
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
                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">SMI Title</p>
                    <p className="fs-14 w-60 f-regular fc-darkgrey">Example title about automating the upgrading of floor panels</p>
                </div>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Originator</p>
                    <p className="fs-14 w-60 f-regular fc-darkgrey">Sample Originatorname</p>
                </div>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Additional Originator(s)</p>
                    <p className="fs-14 w-60 f-regular fc-darkgrey">Firstname Lastname, Originator Nametwo</p>
                </div>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Owner</p>
                    <p className="fs-14 w-60 f-regular fc-darkgrey">Sample Ownername</p>
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
                </div><br></br>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Images</p>
                    <div className="w-60 d-flex flex-column">
                        <p className="fs-14 w-100 f-regular-italic fc-primary">1. image001.png</p>
                        <p className="fs-14 w-100 f-regular-italic fc-primary">2. image002.png</p>
                    </div>
                </div><br></br>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Additional Documents</p>
                    <div className="w-60 d-flex flex-column">
                        <p className="fs-14 w-100 f-regular-italic fc-primary">1. audiofile.mp3</p>
                        <p className="fs-14 w-100 f-regular-italic fc-primary">2. videofile.mp4</p>
                        <p className="fs-14 w-100 f-regular-italic fc-primary">3. worddoc.docx</p>
                        <p className="fs-14 w-100 f-regular-italic fc-primary">4. excel.xlsx</p>
                    </div>
                </div><br></br>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Annual Cost Savings</p>
                    <p className="fs-14 w-60 f-bold fc-green">$1,234.56</p>
                </div><br></br>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-bold fc-black">Notifications</p>
                    <div className="w-60 d-flex flex-column">
                        <p className="fs-14 f-regular-italic fc-darkgrey">Upcoming Dates</p>
                        <div className="d-flex mt-1">
                            <span className="fs-14 fc-white bg-green px-1">30 Day</span>
                            <span className="fs-14 ml-10 fc-grey">02/29/24</span>
                        </div>
                        <div className="d-flex mt-1">
                            <span className="fs-14 fc-white bg-orange px-1">60 Day</span>
                            <span className="fs-14 ml-10 fc-grey">03/30/24</span>
                        </div>
                        <div className="d-flex mt-1">
                            <span className="fs-14 fc-white bg-red px-1">90 Day</span>
                            <span className="fs-14 ml-10 fc-grey">04/30/24</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center mt-30">
                <p className="w-50 py-10 bg-lightgrey text-center fs-20">Change SMI Status</p>
            </div>
            <div className={"d-flex flex-column align-items-center"}>
                <div className="d-flex flex-column w-75 bordered-1 border-grey mt-20">
                    <div className="d-flex justify-content-around bg-lightgrey py-3 w-100"></div>
                    <ul className="menus w-100">
                        {
                            smiStageList.map((value, i) => {
                                return (<li key={i}>
                                    <label className="checkbox-item">{value}
                                        <input type="radio" name="radio" onChange={() => setStage(value)} />
                                        <span className="checkmark-radio"></span>
                                    </label>
                                </li>)
                            })
                        }
                    </ul>
                </div>
                <p className="w-50 py-10 bg-lightgrey text-center fs-20 mt-20">Status Update Notes</p>
                <div className={"w-100" + (stageUpdateNote==="" ? " border-red" : " border-green")}>
                    <div className="d-flex bg-lightgrey">
                        <div className="d-flex flex-column align-items-center w-50">
                            <p className="fs-16">Text Options</p>
                            <div className="">
                                <button type="button" className={"editor-action-btn" + (isTypeBold ? " bg-prim fc-white" : "")} onClick={() => setTypeBold(!isTypeBold)}><TypeBold size={25} /></button>
                                <button type="button" className={"editor-action-btn" + (isTypeItalic ? " bg-prim fc-white" : "")} onClick={() => setTypeItalic(!isTypeItalic)}><TypeItalic size={25} /></button>
                                <button type="button" className={"editor-action-btn" + (isTypeUnderline ? " bg-prim fc-white" : "")} onClick={() => setTypeUnderline(!isTypeUnderline)}><TypeUnderline size={25} /></button>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-50">
                            <p className="fs-16">Paragraph Options</p>
                            <div className="">
                                <button type="button" className={"editor-action-btn" + (isListUl ? " bg-prim fc-white" : "")} onClick={() => setListUl(!isListUl)}><ListUl size={25} /></button>
                                <button type="button" className={"editor-action-btn" + (isListOl ? " bg-prim fc-white" : "")} onClick={() => setListOl(!isListOl)}><ListOl size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <textarea
                        className={
                            "mt-1 fs-23" +
                            (isTypeBold ? " text-style-bold" : "") +
                            (isTypeItalic ? " text-style-italic" : "") +
                            (isTypeUnderline ? " text-style-underline" : "")
                        }
                        rows={6}
                        value={stageUpdateNote}
                        onChange={(e) => setStageUpdateNote(e.target.value)}></textarea>
                    <p className="w-100 d-flex justify-content-end pr-10 fc-grey fs-12">
                        {
                            stageUpdateNote.length === 0 ? "0" : stageUpdateNote.length
                        }
                        /300 characters
                    </p>
                </div>
                <div className="d-flex justify-content-center align-items-center w-100">
                    <button type="button" className="update-btn">Update</button>
                </div>
                <hr className="bordered-2 border-black w-100 mt-4" />
            </div>
            <div className="w-100 d-flex justify-content-center mt-30">
                <p className="w-50 py-10 bg-lightgrey text-center fs-20">SMI Action History</p>
            </div>
            <div className="d-flex flex-column mt-20">
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-regular fc-darkgrey">02/02/24</p>
                    <p className="fs-14 w-60 f-regular fc-darkgrey">Assigned to Owner</p>
                </div>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-regular fc-darkgrey">02/03/24</p>
                    <p className="fs-14 w-60 f-regular fc-darkgrey">Due to Implementation</p>
                </div>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-regular fc-darkgrey">02/04/24</p>
                    <p className="fs-14 w-60 f-regular fc-darkgrey">Implemented</p>
                </div>
                <div className="d-flex">
                    <p className="fs-14 w-40 text-end pr-10 f-regular fc-darkgrey">02/05/24</p>
                    <p className="fs-14 w-60 f-regular fc-darkgrey">Closed</p>
                </div>
            </div>
        </div>
    )
}

export default StatusReportPage