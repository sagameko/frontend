import { Header } from "../../components/Header";
import { Row, Col } from "antd";
import { JobCard } from "../../components/JobCard";
import { useState, useEffect } from "react";
import axios from "axios";
export const Jobs = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/job")
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      
    return (
        <>
            <Header activePage="jobs" />
            <div className="jobs-container">
                <h1>Job Listings</h1>
                <Row justify="center" align="middle">
                    {data.map((job) => (
                        <Col key={job.id} xs={24} sm={12} md={8} lg={8}>
                            <JobCard job={job} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};