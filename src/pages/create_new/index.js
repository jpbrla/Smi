import React, {useState, useEffect, useRef} from "react"
import ReactModal from "react-modal"
import Calculator from "components/Calculator"
import { TypeBold, TypeItalic, TypeUnderline, ListOl, ListUl } from "react-bootstrap-icons"
import { areaList } from "../../resources/data"
import "./style.scss"

import calc_icon from "resources/calc.png"

const CreateNewPage = () => {

    const inputImageFileRef = useRef(null)
    const inputDocumentFileRef = useRef(null)

    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [smi_title, setSmiTitle] = useState('')
    const [origins, setOrigins] = useState('')
    const [owner, setOwner] = useState('')
    const [area, setArea] = useState('')
    const [cost_description, setCostDescription] = useState('')
    const [description, setDescription] = useState('')
    const [isSubmitAvailable, setSubmitAvailable] = useState(false)

    const [isTypeBold, setTypeBold] = useState(false)
    const [isTypeItalic, setTypeItalic] = useState(false)
    const [isTypeUnderline, setTypeUnderline] = useState(false)

    const [isListOl, setListOl] = useState(false)
    const [isListUl, setListUl] = useState(false)

    const [imageFileList, setImageFileList] = useState([])
    const [documentFileList, setDocumentFileList] = useState([])

    const [showCalcModal, setShowCalcModal] = useState(false)
    const [calcResult, setCalcResult] = useState('')
    const [tempCalcResult, setTempCalcResult] = useState('')

    useEffect(() => {
        if (smi_title!=="" && owner!=="" && area!=="" && cost_description!=="" && description!=="") {
            setSubmitAvailable(true)
        } else {
            setSubmitAvailable(false)
        }
    }, [smi_title, origins, owner, area, cost_description, description])

    const pickImageFile = (e) => {
        let files = []
        for (let i = 0; i < e.target.files.length; i++) {
            files.push(e.target.files[i])
        }
        setImageFileList(files)
    }

    const pickDocumentFile = (e) => {
        let files = []
        for (let i = 0; i < e.target.files.length; i++) {
            files.push(e.target.files[i])
        }
        setDocumentFileList(files)
    }

    const removeImageFileFromList = (file) => {
        let array = [...imageFileList]
        const index = array.indexOf(file);
        if (index > -1) {
          array.splice(index, 1);
        }
        setImageFileList(array)
    }

    const removeDocumentFileFromList = (file) => {
        let array = [...documentFileList]
        const index = array.indexOf(file);
        if (index > -1) {
          array.splice(index, 1);
        }
        setDocumentFileList(array)
    }

    const openCalcModal = (e) => {
        setShowCalcModal(true)
    }

    const closeCalcModal = (e) => {
        setShowCalcModal(false)
    }

    return (
        <div className="page-new px-10">
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <p className="f-bold fs-20 fc-primary text-center mt-20 title-border py-1">Create New</p>
            <div className="d-flex justify-content-center w-100 p-1 mt-1">
                <div className="d-flex flex-column align-items-start dash-border w-auto py-1 px-3">
                    <p className="f-regular-italic fc-grey">Required fields are outlined in <span className="fc-red">RED</span></p>
                    <p className="f-regular-italic fc-grey">Completed fields are outlined in <span className="fc-green">GREEN</span></p>
                    <p className="f-regular-italic fc-grey">Suggested fields are outlined in <span className="fc-black">BLACK</span></p>
                </div>
            </div>
            <hr className="bordered-1 border-black mt-1"/>
            <form className="main-form mt-20">
                <div className="d-flex align-items-center mt-2 px-10">
                    <p className="w-40 fs-20 fc-grey">Originator</p>
                    <p className="w-60 fs-20 fc-black">Bon Rickles</p>
                </div>
                <div className="d-flex align-items-center mt-2 px-10">
                    <p className="w-40 fs-20 fc-grey">Division</p>
                    <p className="w-60 fs-20 fc-black">BLA</p>
                </div>
                <div className="d-flex align-items-center mt-2 px-10">
                    <p className="w-40 fs-20 fc-grey">Department</p>
                    <p className="w-60 fs-20 fc-black">Office Services</p>
                </div>
                <div className="mt-2">
                    <div className={"form-section" + (smi_title==="" ? " border-red" : " border-green")}>
                        <input 
                            className="input-control px-10 py-2"
                            type="text"
                            name="smi_title"
                            placeholder="SMI Title"
                            value={smi_title}
                            onChange={(e) => setSmiTitle(e.target.value)} />
                    </div>
                </div>
                <div className="mt-2">
                    <div className={"form-section d-flex align-items-center"}>
                        <input
                            className="input-control px-10 py-2"
                            type="text"
                            name="origins"
                            placeholder="Additional Originator(s),"
                            value={origins}
                            onChange={(e) => setOrigins(e.target.value)} />
                        <span className="fs-9 position-absolute r-0 fc-grey f-regular-italic mr-5">(Use comma between names)</span>
                    </div>
                </div>
                <div className="mt-2"> 
                    <div className={"form-section" + (owner==="" ? " border-red" : " border-green")}>
                        <input
                            className="input-control px-10 py-2"
                            type="text"
                            name="owner"
                            placeholder="Owner"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)} />
                    </div>
                </div>
                <div className="mt-2">
                    <div className={"form-section d-flex align-items-center" + (area==="" ? " border-red" : " border-green")}>
                        <input className="input-control px-10 py-2" type="text" name="area" placeholder="Improvement Area" value={area} disabled />
                        <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setDropdownOpen(!isDropdownOpen)}>Select</button>
                        <div className={"dropdown-content" + (area==="" ? " border-red" : " border-green") + (isDropdownOpen ? " expand" : "")}>
                            <div className="d-flex justify-content-center py-1">
                                <p className="fs-20 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                            </div>
                            <ul className="dropdown-menus">
                                {
                                    areaList.map((value, i) => {
                                        return (<li key={i}>
                                            <label className="checkbox-item">{value}
                                                <input type="radio" name="radio" onChange={() => {
                                                    setArea(value)
                                                    setDropdownOpen(false)
                                                }} />
                                                <span className="checkmark-radio"></span>
                                            </label>
                                        </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className={"form-section p-1" + (description==="" ? " border-red" : " border-green")}>
                        <div className="d-flex">
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
                                "mt-1 fs-18" +
                                (isTypeBold ? " text-style-bold" : "") +
                                (isTypeItalic ? " text-style-italic" : "") +
                                (isTypeUnderline ? " text-style-underline" : "")
                            }
                            placeholder="Description"
                            rows={6}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}></textarea>
                        <p className="w-100 d-flex justify-content-end pr-10 fc-grey fs-12">
                            {
                                description.length === 0 ? "0" : description.length
                            }
                            /300 characters
                        </p>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section d-flex flex-column p-1">
                        <div className="d-flex justify-content-between">
                            <p className="fc-grey fs-18">Image Upload</p>
                            <button type="button" className="select-file-btn" onClick={() => inputImageFileRef.current.click()}>Select from Device</button>
                            <input type="file" className="d-none" ref={inputImageFileRef} multiple accept=".jpg, .png, .gif" onChange={pickImageFile} />
                        </div>
                        <div className="file-board d-flex align-items-center justify-content-center">
                            {
                                imageFileList.length === 0 ? <p className="fc-grey py-20">jpg, png, gif</p> :
                                <div className="file-list mt-10">
                                {
                                    imageFileList.map((file, i) => {
                                        return (
                                            <div key={i} className="d-flex justify-content-between bordered-1 border-lightgrey w-100">
                                                <p className="fs-16 fc-primary text-ellipsis px-10 py-1">{file.name}</p>
                                                <button type="button" className="border-none bg-red fc-white px-10" onClick={() => removeImageFileFromList(file)}>X</button>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section d-flex flex-column p-1">
                        <div className="d-flex justify-content-between">
                            <p className="fc-grey fs-18">Additional Documents</p>
                            <button type="button" className="select-file-btn" onClick={() => inputDocumentFileRef.current.click()}>Select from Device</button>
                            <input type="file" className="d-none" ref={inputDocumentFileRef} multiple accept=".mp3, .mp4, .pdf, .xlsx, .csv, .docx" onChange={pickDocumentFile} />
                        </div>
                        <div className="file-board d-flex align-items-center justify-content-center">
                            {
                                documentFileList.length === 0 ? <p className="fc-grey py-20">mp3, mp4, pdf, xlsx, csv, docx</p> :
                                <div className="file-list mt-10">
                                {
                                    documentFileList.map((file, i) => {
                                        return (
                                            <div key={i} className="d-flex justify-content-between bordered-1 border-lightgrey w-100">
                                                <p className="fs-16 fc-primary text-ellipsis px-10 py-1">{file.name}</p>
                                                <button type="button" className="border-none bg-red fc-white px-10" onClick={() => removeDocumentFileFromList(file)}>X</button>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className={"form-section d-flex flex-column p-1" + (cost_description==="" ? " border-red" : " border-green")}>
                        <div className="d-flex justify-content-between">
                            <p className="fc-grey fs-18">Detailed Cost Savings Calculation</p>
                            <button type="button" className="border-none bg-white" onClick={openCalcModal}><img className="calc-img" src={calc_icon} alt="calculator" /></button>
                        </div>
                        <div className="px-1">
                            <div className="d-flex">
                                <span className="fs-20 fc-primary">$</span>
                                <input type="text" className="input-control dashed-border fc-primary px-10" value={calcResult} onChange={(e) => setCalcResult(e.target.value)} />
                            </div>
                            <textarea
                                className="mt-3 fs-18"
                                placeholder="Cost Savings Description"
                                rows={6}
                                value={cost_description}
                                onChange={(e) => setCostDescription(e.target.value)}></textarea>
                            <p className="w-100 d-flex justify-content-end pr-10 fc-grey fs-12">
                                {
                                    cost_description.length === 0 ? "0" : cost_description.length
                                }
                                /300 characters
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section border-none d-flex justify-content-center mt-20">
                        <button type="button" className={"submit-btn" + (isSubmitAvailable ? " bg-prim" : " bg-grey cursor-not-allowed")} onClick={(e) => isSubmitAvailable ? window.location.href = "/thank" : {}}>SUBMIT</button>
                    </div>
                    <p className="w-100 text-center fs-16 fc-darkgrey f-regular-italic mt-10">
                    {
                        isSubmitAvailable ? "You will receive an email confirming this has been posted." : "This button will turn Bobrick blue when the form is complete."
                    }
                    </p>
                </div>
            </form>
            <ReactModal isOpen={showCalcModal} shouldCloseOnEsc ariaHideApp={false}>
                <div className="d-flex flex-column">
                    <Calculator onChangeResult={(result) => setTempCalcResult(result)} />
                    <div className="d-flex justify-content-around">
                        <button type="button" className="calc-btn fs-25 mt-20" onClick={() => {
                            setCalcResult(tempCalcResult)
                            closeCalcModal()
                        }}>Apply</button>
                        <button type="button" className="calc-btn bg-grey fs-25 mt-20" onClick={closeCalcModal}>Close</button>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default CreateNewPage