from flask import Flask, session, request, jsonify
from flaskext.mysql import MySQL
import pymysql
import names
import random, datetime, json, base64
from data import divisionList, departmentList

mysql = MySQL()
app = Flask(__name__)

app.secret_key = "secretkey"

app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'smi'

mysql.init_app(app)

@app.route('/new', methods=['GET','POST'])
def createRequest():
    if request.method == 'GET':
        originator = names.get_full_name(gender="male")
        division = random.choice(divisionList)
        department = random.choice(departmentList)
        conn = mysql.connect()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute('SELECT value FROM lookup WHERE `key` = "ImprovementArea"')
        areaList = cur.fetchall()
        return {"originator": originator, "division": division, "department": department, "areas": areaList}
    elif request.method == 'POST':
        data = request.json
        smi_title = data['title']
        owner = data['owner']
        originator = data['originator']
        additional_originators = data['additional_originators']
        division = data['division']
        department = data['department']
        description = data['description']
        improvement_area = data['improvement_area']
        cost_saving_amnt = data['cost_saving_amnt']
        cost_saving_doc = data['cost_saving_doc']
        created_date = datetime.datetime.now()
        created_by = data['originator']
        conn = mysql.connect()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute('SELECT MAX(req_no) AS max_req_no FROM request')
        query_result = cur.fetchone()
        max_req_no = query_result['max_req_no']
        max_req_no = max_req_no if max_req_no != None else 1000
        cur.execute('SELECT value FROM lookup WHERE `key` = "Stage"')
        query_result = cur.fetchall()
        stage = random.choice(query_result)['value']
        cur.execute("INSERT INTO request VALUES(0, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", (max_req_no+1, stage, originator, division, department, smi_title, owner, additional_originators, improvement_area, description, cost_saving_amnt, cost_saving_doc, created_date, created_by, None, None, 0))
        conn.commit()
        new_id = cur.lastrowid

        attachment_images = data['attachment_images']
        if len(attachment_images) > 0:
            for img in attachment_images:
                cur.execute("INSERT INTO request_attachment_image VALUES(0, %s, %s, %s, %s, %s, %s, %s)", (new_id, img['fname'], img['ftype'], img['fsize'], created_date, created_by, img['fdata']))
                conn.commit()
        attachment_docs = data['attachment_docs']
        if len(attachment_docs) > 0:
            for doc in attachment_docs:
                cur.execute("INSERT INTO request_attachment_doc VALUES(0, %s, %s, %s, %s, %s, %s, %s)", (new_id, doc['fname'], doc['ftype'], doc['fsize'], created_date, created_by, doc['fdata']))
                conn.commit()

        return {"error": False}
    
@app.route('/search', methods=['GET','POST'])
def search():
    if request.method == 'GET':
        conn = mysql.connect()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute('SELECT `key`, GROUP_CONCAT(`value`) `val` FROM lookup GROUP BY `key`')
        listData = cur.fetchall()
        return jsonify(listData)
    elif request.method == 'POST':
        data = request.json
        smi_no = data['smi_no']
        smi_title = data['smi_title']
        owner = data['owner']
        originator = data['originator']
        additional_originators = data['additional_originators']
        improvement_area = data['improve_area']
        description = data['description']
        division = data['division']
        department = data['department']
        stage = data['stage']
        start_created_date = data['start_created_date']
        end_created_date = data['end_created_date']

        where_clause = ""
        if smi_no != "":
            where_clause += f"`req_no` = {smi_no} AND "
        if smi_title != "":
            where_clause += f"`title` = '{smi_title}' AND "
        if owner != "":
            where_clause += f"`owner` = '{owner}' AND "
        if originator != "":
            where_clause += f"`originator` = '{originator}' AND "
        if additional_originators != "":
            where_clause += "("
            additional_originators = additional_originators.split(",")
            for origin in additional_originators:
                where_clause += f"(`additional_originators` LIKE '{origin},%' OR `additional_originators` LIKE '%,{origin},%' OR `additional_originators` LIKE '%,{origin}') AND "
            where_clause = where_clause.strip(" AND")
            where_clause += ") AND "
        if improvement_area != "":
            where_clause += f"`improvement_area` = '{improvement_area}' AND "
        if description != "":
            where_clause += f"`description` LIKE '%{description}%' AND "
        if len(division) != 0:
            arr_string = ""
            for v in division:
                arr_string += f"'{v}',"
            arr_string = arr_string.rstrip(",")
            where_clause += f"`division` IN ({arr_string}) AND "
        if len(department) != 0:
            arr_string = ""
            for v in department:
                arr_string += f"'{v}',"
            arr_string = arr_string.rstrip(",")
            where_clause += f"`department` IN ({arr_string}) AND "
        if stage != "":
            where_clause += f"`stage` = '{stage}' AND "
        if start_created_date != "" and end_created_date != "":
            splt_start_date = start_created_date.split("/")
            splt_end_date = end_created_date.split("/")
            where_clause += f"`created_date` BETWEEN DATE('{2000+int(splt_start_date[2])}-{splt_start_date[0]}-{splt_start_date[1]}') AND DATE('{2000+int(splt_end_date[2])}-{splt_end_date[0]}-{splt_end_date[1]}') AND "
        elif start_created_date != "" and end_created_date == "":
            splt_start_date = start_created_date.split("/")
            where_clause += f"`created_date` >= DATE('{2000+int(splt_start_date[2])}-{splt_start_date[0]}-{splt_start_date[1]}') AND "
        elif start_created_date == "" and end_created_date != "":
            splt_end_date = end_created_date.split("/")
            where_clause += f"`created_date` <= DATE('{2000+int(splt_end_date[2])}-{splt_end_date[0]}-{splt_end_date[1]}') AND "
        where_clause = where_clause.rstrip(" AND ")

        query_string = f"SELECT * FROM request {'WHERE ' + where_clause if where_clause != '' else ''}"
        conn = mysql.connect()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute(query_string)
        query_result = cur.fetchall()
        if len(query_result) == 0:
            return {"error": False, "data": None}
        else:
            return {"error": False, "data": query_result}

@app.route('/getAttachments', methods=['POST'])
def getAttachments():
    print(request.json)
    req_id = request.json['req_id']
    conn = mysql.connect()
    cur = conn.cursor(pymysql.cursors.DictCursor)
    query_string = f"""
        SELECT `id`, `name`, `content_type`, `data`, 'image' as `type` FROM `request_attachment_image` WHERE `request_id` = {req_id}
        UNION ALL
        SELECT `id`, `name`, `content_type`, `data`, 'doc' as `type` FROM `request_attachment_doc` WHERE `request_id` = {req_id}
    """
    cur.execute(query_string)
    attachments = cur.fetchall()
    image_data = []
    doc_data = []
    for attach in attachments:
        attach_id = attach['id']
        name = attach['name']
        content_type = attach['content_type']
        table_flag = attach['type']
        file_data = attach['data']
        if table_flag == "image":
            image_data.append({
                "attach_id": attach_id,
                "name": name,
                "content_type": content_type,
                "table_flag": table_flag,
                "file_data": file_data.decode("utf-8")
            })
        else:
            doc_data.append({
                "attach_id": attach_id,
                "name": name,
                "content_type": content_type,
                "table_flag": table_flag,
                "file_data": file_data.decode("utf-8")
            })

    return {"error": False, "data": { "images": image_data, "docs": doc_data }}

if __name__ == '__main__':
    app.run(debug=True)