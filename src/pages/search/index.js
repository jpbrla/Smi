import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { Calendar, DateObject } from "react-multi-date-picker"
import axios from "axios"
import { useAlert, types } from "react-alert"
import calendar_range_icon from "resources/calendar-range.svg"
import "react-multi-date-picker/styles/layouts/mobile.css"
import "./style.scss"

const SearchPage = () => {
    const alert = useAlert()
    const navigate = useNavigate()
    const {state} = useLocation()

    const [smi_no, setSmiNo] = useState('')
    const [smi_title, setSmiTitle] = useState('')
    const [owner, setOwner] = useState('')
    const [origin, setOrigin] = useState('')
    const [extra_origins, setExtraOrigins] = useState('')
    const [improve_area_list, setImproveAreaList] = useState([])
    const [improve_area, setImproveArea] = useState('')
    const [description, setDescription] = useState('')
    const [divisionList, setDivisionList] = useState([])
    const [division, setDivision] = useState([])
    const [departmentList, setDepartmentList] = useState([])
    const [department, setDepartment] = useState([])
    const [stageList, setStageList] = useState([])
    const [stage, setStage] = useState('')
    const [isAreaDropdownOpen, setAreaDropdownOpen] = useState(false)
    const [isDivisionDropdownOpen, setDivisionDropdownOpen] = useState(false)
    const [isDepartDropdownOpen, setDepartDropdownOpen] = useState(false)
    const [isStageDropdownOpen, setStageDropdownOpen] = useState(false)
    const [isCreateDateOpen, setCreateDateOpen] = useState(false)
    const [startCreateDate, setStartCreateDate] = useState('__ / __ / __')
    const [endCreateDate, setEndCreateDate] = useState('__ / __ / __')
    const [isModifyDateOpen, setModifyDateOpen] = useState(false)
    const [startModifyDate, setStartModifyDate] = useState('__ / __ / __')
    const [endModifyDate, setEndModifyDate] = useState('__ / __ / __')
    const [isQuickButtonClicked, setQuickButtonClicked] = useState(false)

    useEffect(() => {
        axios.get("/search")
            .then((res) => {
                res.data.forEach((data) => {
                    if (data.key === "ImprovementArea")
                        setImproveAreaList(data.val.split(","))
                    else if(data.key === "Division")
                        setDivisionList(data.val.split(","))
                    else if(data.key === "Department")
                        setDepartmentList(data.val.split(","))
                    else
                        setStageList(data.val.split(","))
                })
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        if (state != null) {
            const {queries} = state
            setQuickButtonClicked(queries.is_quick_date)
            setSmiNo(queries.smi_no)
            setStartCreateDate(queries.start_created_date)
            setEndCreateDate(queries.end_created_date)
            setSmiTitle(queries.smi_title)
            setOwner(queries.owner)
            setOrigin(queries.originator)
            setExtraOrigins(queries.additional_originators)
            setImproveArea(queries.improve_area)
            setDescription(queries.description)
            setDivision(queries.division)
            setDepartment(queries.department)
            setStage(queries.stage)
            window.history.replaceState({}, '')
        }
    }, [state])

    const clearSearchForm = () => {
        setSmiNo('')
        setSmiTitle('')
        setOwner('')
        setOrigin('')
        setExtraOrigins('')
        setImproveArea('')
        setDescription('')
        setDivision([])
        setDepartment([])
        setStage('')
        setStartCreateDate('__ / __ / __')
        setEndCreateDate('__ / __ / __')
        setStartModifyDate('__ / __ / __')
        setEndModifyDate('__ / __ / __')
    }

    const isEmpty = (obj) => {
        for (const prop in obj) {
          if (Object.hasOwn(obj, prop)) {
            return false;
          }
        }
      
        return true;
    }

    const setAnnualQuarterDate = (e) => {
        setQuickButtonClicked(true)
        let today = new Date()
        setStartCreateDate('01/01/'+(today.getFullYear()-2000))
        let endObject = { date: new DateObject(), format: 'MM/DD/YY' }
        setEndCreateDate(new DateObject(endObject).format())
    }

    const setAnnualYearDate = (e) => {
        setQuickButtonClicked(true)
        let today = new Date()
        setStartCreateDate('01/01/'+(today.getFullYear()-2000))
        let endObject = { date: new DateObject(), format: 'MM/DD/YY' }
        setEndCreateDate(new DateObject(endObject).format())
    }   

    const setFiscalQuarterDate = (e) => {
        setQuickButtonClicked(true)
        let today = new Date()
        let monthOfToday = today.getMonth()+1
        if (monthOfToday === 1 || monthOfToday === 11 || monthOfToday === 12) {
            // setStartCreateDate('02/01/'+(today.getFullYear()-2000))
            // let endObject = { date: new DateObject(), format: 'MM/DD/YY' }
            // setEndCreateDate(new DateObject(endObject).format())
        } else if (monthOfToday >= 2 && monthOfToday <= 4) {
            setStartCreateDate('02/01/'+(today.getFullYear()-2000))
            let endObject = { date: new DateObject(), format: 'MM/DD/YY' }
            setEndCreateDate(new DateObject(endObject).format())
        } else if (monthOfToday >= 5 && monthOfToday <= 7) {
            setStartCreateDate('05/01/'+(today.getFullYear()-2000))
            let endObject = { date: new DateObject(), format: 'MM/DD/YY' }
            setEndCreateDate(new DateObject(endObject).format())
        } else {
            setStartCreateDate('08/01/'+(today.getFullYear()-2000))
            let endObject = { date: new DateObject(), format: 'MM/DD/YY' }
            setEndCreateDate(new DateObject(endObject).format())
        }
    }

    const setFiscalYearDate = (e) => {
        setQuickButtonClicked(true)
        let today = new Date()
        setStartCreateDate('11/01/'+(today.getFullYear()-2000-1))
        setEndCreateDate('10/31/'+(today.getFullYear()-2000))
    }

    const applyDate = (date, format, flag) => {
        setQuickButtonClicked(false)
        let startObject, endObject = {}
        if (date.length === 1) {
            startObject = { date: date[0], format }
            endObject = {}
        } else if (date.length > 1) {
            startObject = { date: date[0], format }
            endObject = { date: date[1], format }
        }
        if (flag === 1) {
            setStartCreateDate(new DateObject(startObject).format())
            if (isEmpty(endObject))
                setEndCreateDate("__ / __ / __")
            else
                setEndCreateDate(new DateObject(endObject).format())

        } else {
            setStartModifyDate(new DateObject(startObject).format())
            if (isEmpty(endObject))
                setEndModifyDate("__ / __ / __")
            else
                setEndModifyDate(new DateObject(endObject).format())
        }
    }

    const getRangeDateObject = (start, end) => {
        let startDate = new Date(start)
        let endDate = new Date(end)
        let startDateObject = {}, endDateObject = {}
        if (isQuickButtonClicked) {
            startDateObject = new DateObject().setYear(startDate.getFullYear()).setDay(startDate.getDate()).setMonth(startDate.getMonth()+1)
            endDateObject = new DateObject().setYear(endDate.getFullYear()).setDay(endDate.getDate()).setMonth(endDate.getMonth()+1)
        } else {
            startDateObject = new DateObject().setDay(startDate.getDate())
            endDateObject = new DateObject().setDay(endDate.getDate()).add(endDate.getMonth() - startDate.getMonth(), "month")
        }
        return [startDateObject, endDateObject]
    }

    const removeItemFromArray = (item, list) => {
        let array = [...list]
        const index = array.indexOf(item);
        if (index > -1) {
          array.splice(index, 1);
        }
        return array
    }

    const addItemToArray = (newItem, list) => {
        let array = [...list]
        array.push(newItem)
        return array
    }

    const performSearch = (e) => {
        let formData = {
            smi_no,
            smi_title,
            owner,
            originator: origin,
            additional_originators: extra_origins,
            improve_area,
            description,
            division,
            department,
            stage,
            start_created_date: startCreateDate === '__ / __ / __' ? "" : startCreateDate,
            end_created_date: endCreateDate === '__ / __ / __' ? "" : endCreateDate,
            is_quick_date: isQuickButtonClicked
        }

        axios.post("/search", formData)
            .then((res) => {
                let response = res.data
                if (!response.error && response.data != null) {
                    navigate("/searchresult", { state: { queries: formData, result: response.data } })
                } else {
                    alert.show('There is no matched result.', { type: types.ERROR })
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={"page-search d-flex flex-column align-items-center px-10" + (isAreaDropdownOpen || isDivisionDropdownOpen || isStageDropdownOpen ? " h-105" : "")}>
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <p className="w-100 f-bold fs-20 fc-primary text-center mt-20 title-border py-1">Search</p>
            <form className="search-form w-100 px-10">
                <div className="form-section mt-20">
                    <input 
                        type="number"
                        min={1}
                        max={99999}
                        className="input-control fs-20 bordered w-100 px-10 py-2"
                        placeholder="SMI Number #"
                        value={smi_no}
                        onChange={(e) => setSmiNo(e.target.value)}
                        />
                </div>
                <div className="form-section mt-10">
                    <label className="fs-18 fc-grey">Date Created Range</label>
                    <div className="d-flex">
                        <div className="d-flex w-75 bordered border-darkgrey py-1">
                            <span className="d-flex justify-content-center align-items-center fs-20 w-75 h-100" >{startCreateDate}</span>
                            <span className="f-regular-italic fc-grey fs-20">thru</span>
                            <span className="d-flex justify-content-center align-items-center fs-20 w-75">{endCreateDate}</span>
                        </div>
                        <button type="button" className="icon-btn" onClick={() => setCreateDateOpen(!isCreateDateOpen)}><img src={calendar_range_icon} width={30} alt="" /></button>
                    </div>
                    {
                        isCreateDateOpen ? 
                            <Calendar
                                value={getRangeDateObject(startCreateDate, endCreateDate)}
                                onChange={(date, format) => applyDate(date, "MM/DD/YY", 1)}
                                range
                                numberOfMonths={2}
                                className="mt-10"
                            />
                        : <></>
                    }
                </div>
                <div className="form-section mt-10">
                    <label className="fs-18 fc-grey">Date Modified Range</label>
                    <div className="d-flex">
                        <div className="d-flex w-75 bordered border-darkgrey py-1">
                            <span className="d-flex justify-content-center align-items-center fs-20 w-75 h-100" >{startModifyDate}</span>
                            <span className="f-regular-italic fc-grey fs-20">thru</span>
                            <span className="d-flex justify-content-center align-items-center fs-20 w-75">{endModifyDate}</span>
                        </div>
                        <button type="button" className="icon-btn" onClick={() => setModifyDateOpen(!isModifyDateOpen)}><img src={calendar_range_icon} width={30} alt="" /></button>
                    </div>
                    {
                        isModifyDateOpen ? 
                            <Calendar
                                value={getRangeDateObject(startModifyDate, endModifyDate)}
                                onChange={(date, format) => applyDate(date, "MM/DD/YY", 2)}
                                range
                                numberOfMonths={2}
                                className="mt-10"
                            />
                        : <></>
                    }
                </div>
                <div className="form-section mt-10">
                    <label className="fs-18 fc-grey f-regular-italic">Quick Select (time to date)</label>
                    <div className="button-group">
                        <button type="button" className="bg-grey fs-18" onClick={setAnnualQuarterDate}>Annual Quarter</button>
                        <button type="button" className="bg-grey fs-18" onClick={setAnnualYearDate}>Annual Year</button>
                        <button type="button" className="bg-grey fs-18" onClick={setFiscalQuarterDate}>Fiscal Quarter</button>
                        <button type="button" className="bg-grey fs-18" onClick={setFiscalYearDate}>Fiscal Year</button>
                    </div>
                </div>
                <div className="form-section mt-20">
                    <p className="w-100 text-center fs-18 fc-darkgrey">Additional Search Criteria</p>
                </div>
                <div className={"form-section mt-10 bordered"}>
                    <input
                        className="input-control px-10 w-100 py-2"
                        type="text"
                        name="smi_title"
                        placeholder="SMI Title"
                        value={smi_title}
                        onChange={(e) => setSmiTitle(e.target.value)} />
                </div>
                <div className={"form-section mt-1 bordered"}>
                    <input
                        className="input-control px-10 w-100 py-2"
                        type="text"
                        name="owner"
                        placeholder="Owner"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)} />
                </div>
                <div className={"form-section mt-1 bordered"}>
                    <input
                        className="input-control px-10 w-100 py-2"
                        type="text"
                        name="origin"
                        placeholder="Originator"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)} />
                </div>
                <div className={"form-section mt-1 bordered"}>
                    <input
                        className="input-control px-10 w-100 py-2"
                        type="text"
                        name="extra_origins"
                        placeholder="Additional Originator(s),"
                        value={extra_origins}
                        onChange={(e) => setExtraOrigins(e.target.value)} />
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center"}>
                    <input className="input-control px-10 py-2 w-100" type="text" name="improve_area" placeholder="Improvement Area" value={improve_area} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => 
                    {
                        setAreaDropdownOpen(!isAreaDropdownOpen)
                        setDivisionDropdownOpen(false)
                        setDepartDropdownOpen(false)
                        setStageDropdownOpen(false)
                    }
                    }>Select</button>
                    <div className={"dropdown-content" + (improve_area === "" ? " border-red" : " border-green") + (isAreaDropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-center py-1">
                            <p className="fs-18 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                improve_area_list.map((value, i) => {
                                    return (<li key={i}>
                                        <label className="checkbox-item">{value}
                                            <input type="radio" name="radio_area" onChange={(e) => setImproveArea(value)} checked={improve_area === value} />
                                            <span className="checkmark-radio"></span>
                                        </label>
                                    </li>)
                                })
                            }
                        </ul>
                        <div className="d-flex flex-column align-items-center py-3">
                            <button type="button" className={"py-1 fs-18 fc-white w-50" + (improve_area === "" ? " bg-grey" : " bg-primary")} onClick={() => setAreaDropdownOpen(false)}>DONE</button>
                        </div>
                    </div>
                </div>
                <div className={"form-section mt-1 bordered d-flex align-items-center"}>
                    <input
                        className="input-control px-10 w-100 py-2"
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    <span className="fs-16 position-absolute r-0 fc-grey f-regular-italic mr-5">Enter any keywords &nbsp; &nbsp; &nbsp; &nbsp;</span>
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center"}>
                    <input className="input-control px-10 py-2 text-ellipsis w-100" type="text" name="division" placeholder="Division" value={division.join(", ")} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => 
                    {
                        setDivisionDropdownOpen(!isDivisionDropdownOpen)
                        setAreaDropdownOpen(false)
                        setDepartDropdownOpen(false)
                        setStageDropdownOpen(false)
                    }
                    }>Select</button>
                    <div className={"dropdown-content" + (division.length === 0 ? " border-red" : " border-green") + (isDivisionDropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-center py-1">
                            <p className="fs-20 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus grid-col-3">
                            {
                                divisionList.map((value, i) => {
                                    return (<li key={i}>
                                        <label className="checkbox-item">{value}
                                            <input type="checkbox" onChange={(e) => 
                                                e.target.checked ? setDivision(addItemToArray(value, division)) : setDivision(removeItemFromArray(value, division))
                                            } checked={division.indexOf(value) !== -1} />
                                            <span className="checkmark-checkbox"></span>
                                        </label>
                                    </li>)
                                })
                            }
                        </ul>
                        <div className="d-flex flex-column align-items-center py-3">
                            <button type="button" className={"py-1 fs-18 fc-white w-50" + (division.length === 0 ? " bg-grey" : " bg-primary")} onClick={() => setDivisionDropdownOpen(false)}>DONE</button>
                        </div>
                    </div>
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center"}>
                    <input className="input-control px-10 py-2 w-100 text-ellipsis" type="text" name="department" placeholder="Department" value={department.join(", ")} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setDepartDropdownOpen(!isDepartDropdownOpen)}>Select</button>
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center"}>
                    <input className="input-control px-10 py-2" type="text" name="stage" placeholder="SMI Stage" value={stage} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => 
                    {
                        setStageDropdownOpen(!isStageDropdownOpen)
                        setAreaDropdownOpen(false)
                        setDivisionDropdownOpen(false)
                        setDepartDropdownOpen(false)
                    }
                    }>Select</button>
                    <div className={"dropdown-content" + (stage === "" ? " border-red" : " border-green") + (isStageDropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-center py-1">
                            <p className="fs-20 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                stageList.map((value, i) => {
                                    return (<li key={i}>
                                        <label className="checkbox-item">{value}
                                            <input type="radio" name="radio_stage" onChange={() => setStage(value)} checked={stage === value} />
                                            <span className="checkmark-radio"></span>
                                        </label>
                                    </li>)
                                })
                            }
                        </ul>
                        <div className="d-flex flex-column align-items-center py-3">
                            <button type="button" className={"py-1 fs-18 fc-white w-50" + (stage === "" ? " bg-grey" : " bg-primary")} onClick={() => setStageDropdownOpen(false)}>DONE</button>
                        </div>
                    </div>
                </div>
                <div className="form-section d-flex justify-content-around mt-20">
                    <button type="button" className="submit-btn bg-prim" onClick={performSearch}>SEARCH</button>
                    <button type="button" className="submit-btn bg-grey" onClick={clearSearchForm}>Clear Search Fields</button>
                </div>
            </form>
            <div className={"dropdown-content position-fixed scrollable w-auto h-90vh top-0 mt-5vh" + (department.length === 0 ? " border-red" : " border-green") + (isDepartDropdownOpen ? " expand" : "")}>
                <div className="d-flex justify-content-around py-1">
                    <p className="fs-18 fc-grey f-regular-italic">Choose the Departments to add to this report</p>
                </div> 
                <ul className="dropdown-menus px-30" style={{height: '85%', overflowY: "auto"}}>
                    {
                        departmentList.map((value, i) => {
                            return (<li key={i}>
                                <label className="checkbox-item">{value}
                                    <input type="checkbox" onChange={(e) => 
                                        e.target.checked ? setDepartment(addItemToArray(value, department)) : setDepartment(removeItemFromArray(value, department))
                                    } checked={department.indexOf(value) !== -1} />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                            </li>)
                        })
                    }
                </ul>
                <div className="d-flex flex-column align-items-center">
                    <hr />
                    <button type="button" className={"py-1 fs-18 fc-white w-50" + (department.length === 0 ? " bg-grey" : " bg-primary")} onClick={() => setDepartDropdownOpen(false)}>DONE</button>
                </div>
            </div>
        </div>
    )
}

export default SearchPage