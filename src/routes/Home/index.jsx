import { Header } from "../../components/Header";
import { Layout, Typography, Row, Col, Button, Card, Divider } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { JobCard } from "../../components/JobCard";
import { MissionValues } from "../../components/MissionValue";
import { useState, useEffect } from "react";
import axios from "axios";

const { Title, Text } = Typography;
const { Content } = Layout;


export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/jobs")
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      
    return (
        <>
            <Header activePage="home" />
            <Layout>
                <Content>
                    <div className="homepage-container">
                        <div className="hero-section">
                            <div className="hero-section-content">
                                <Title level={1} style={{ color: "white" }}>
                                    Find your next job
                                </Title>
                                <Text
                                    type="secondary"
                                    style={{ fontSize: 18, color: "white" }}
                                >
                                    Explore thousands of job opportunities in
                                    our University.
                                </Text>
                                <div className="search-bar">
                                    <input
                                        type="text"
                                        placeholder="Job title, keywords or company"
                                    />
                                    <Button
                                        icon={<SearchOutlined />}
                                        type="primary"
                                    >
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="featured-jobs-section">
                            <Title level={2} id="featured-jobs-title">
                                Featured Jobs
                            </Title>
                            <Row>
                                {data.map((job) => (
                                    <Col xs={24} sm={12} md={8} key={job.id}>
                                        <JobCard job={job} />
                                    </Col>
                                ))}
                            </Row>
                            <div className="see-all-jobs">
                                <Button type="primary">
                                    <Link to="/jobs">See all jobs</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="mission-value-container">
                            <MissionValues />
                        </div>
                    </div>
                </Content>
            </Layout>
        </>
    );
};
