import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Tag } from "antd";

export const StaffClass = () => {
    // mock data classes
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/classes")
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      

    // define the columns for the table
    const columns = [
        {
            title: "Class Code",
            dataIndex: "classCode",
            key: "classCode",
        },
        {
            title: "Class Name",
            dataIndex: "className",
            key: "className",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Number of Applicants",
            dataIndex: "numApplicants",
            key: "numApplicants",
        },
        {
            title: "Action",
            key: "action",
            render: (record) => (
                <Link to={`/class/${record.id}`}>
                    <Button type="primary">View Class</Button>
                </Link>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text) => {
                if (text === "open") {
                    return <Tag color="green">Open</Tag>;
                } else if (text === "closed") {
                    return <Tag color="red">Closed</Tag>;
                }
            },
        },
    ];

    return (
        <div>
            <h1>Staff Class Page</h1>
            <Table dataSource={data} columns={columns} />
        </div>
    );
};
