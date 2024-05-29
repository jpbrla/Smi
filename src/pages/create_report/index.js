import React, {useEffect, useState} from "react"
import DataTable from "react-data-table-component"
import { saveAs } from "file-saver"
import { utils, write, read } from "xlsx"

import "./style.scss"

const fetchData = async () => {
    let data = []
    let columns = []
    const wb = read(await (await fetch(window.location.origin + "/smi_report.xlsx")).arrayBuffer(), { WTF: 1 });

    /* use sheet_to_json with header: 1 to generate an array of arrays */
    const sheetData = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1 });
    const cols = sheetData[0].map((r) => ({ key: r, name: r }))
    for (let i = 0; i < cols.length; i++) {
        columns.push(
            {
                name: cols[i].name,
                selector: row => row[cols[i].key],
                grow: cols[i].key === "Description" ? 2 : 0
            }
        )
    }
    const rows = sheetData.slice(1).map((r) => r.reduce((acc, x, i) => {
        acc[sheetData[0][i]] = x;
        return acc;
      }, {}))
    for (let r = 0; r < rows.length; r++){
        let sub_data = {}
        for (let c = 0; c < cols.length; c++) {
            sub_data[cols[c].key] = rows[r][cols[c].key]
        }
        data.push(sub_data)
    }
    return {rows: data, columns: columns}
}

const CreateReportPage = () => {

    const [data, setData] = useState([])
    const [columns, setColumns] = useState([])

    useEffect(() => {
        fetchData().then((res) => {
            setColumns(res.columns)
            setData(res.rows)
        })
    }, [])

    const convertArrayOfObjectsToCSV = (array) => {
        let result;
    
        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(data[0]);
    
        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
    
        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;
    
                result += item[key];
                
                ctr++;
            });
            result += lineDelimiter;
        });
    
        return result;
    }
    
    // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
    const downloadCSV = (array) => {
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;
    
        const filename = 'Report.csv';
    
        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }
    
        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }
    
    const exportToExcel = (fileName) => {
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
        saveAs(blob, `${fileName}.xlsx`);
    };

    const customStyles = {
        headCells: {
            style: {
                fontSize: 15,
                fontWeight: 'bold'
            },
        },
        cells: {
            style: {
                fontSize: 12
            },
        },
        pagination: {
            style: {
                fontSize: 15,
                color: "black"
            }
        }
    };

    return (
        <div className="page-report px-10">
            <p className="w-100 fs-20 fc-primary f-bold text-center">Suggested Methods Improvement (SMI)</p>
            <p className="f-bold fs-20 fc-primary text-center mt-20 title-border py-1">Report</p>
            <div className="d-flex flex-column">
                <p className="f-bold">Search Query:</p>
                <div className="dash-border">
                    <div className="d-flex fs-14">
                        <span className="f-bold">Example Search Field1:</span>
                        <span className="ml-10">Data from Search</span>
                    </div>
                    <div className="d-flex fs-14">
                        <span className="f-bold">Example Search Field2:</span>
                        <span className="ml-10">Data from Search</span>
                    </div>
                    <div className="d-flex fs-14">
                        <span className="f-bold">Example Search Field3:</span>
                        <span className="ml-10">Data from Search</span>
                    </div>
                    <div className="d-flex fs-14">
                        <span className="f-bold">Example Search Field4:</span>
                        <span className="ml-10">Data from Search</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column mt-30">
                <p className="f-bold">Search Result:</p>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    responsive
                    pagination
                    dense
                />
            </div>
            <div className="d-flex flex-column mt-20">
                <p className="w-100 text-center f-bold">Export Report from Search Results</p>
                <div className="d-flex justify-content-around mt-10">
                    <button type="button" className="export-btn" onClick={() => downloadCSV(data)}>Export to CSV</button>
                    <button type="button" className="export-btn" onClick={() => exportToExcel("Report")}>Export to XLSX</button>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-30">
                <button className="search-btn">Revise Search</button>
            </div>
        </div>
    )
}

export default CreateReportPage