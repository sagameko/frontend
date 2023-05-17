import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

export const MissionValues = () => {
    return (
        <div className="mission-values">
            <Title level={2}>Our Mission</Title>
            <Row gutter={[24, 24]}>
                <Paragraph>
                    At HR Management, we strive to provide the best HR solutions
                    to our clients. Our mission is to help businesses grow by
                    managing their most valuable asset - their employees.
                </Paragraph>
            </Row>
            <Title level={2}>Our Values</Title>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                    <div className="value-card">
                        <Title level={3}>Integrity</Title>
                        <Paragraph>
                            We believe in doing the right thing, even when no
                            one is watching. We are honest, transparent, and
                            accountable in all our actions.
                        </Paragraph>
                    </div>
                </Col>
                <Col xs={24} md={8}>
                    <div className="value-card">
                        <Title level={3}>Excellence</Title>
                        <Paragraph>
                            We strive for excellence in everything we do. We are
                            committed to delivering high-quality HR solutions
                            that exceed our clients' expectations.
                        </Paragraph>
                    </div>
                </Col>
                <Col xs={24} md={8}>
                    <div className="value-card">
                        <Title level={3}>Teamwork</Title>
                        <Paragraph>
                            We believe in the power of collaboration. We work
                            together with our clients and our team members to
                            achieve our common goals.
                        </Paragraph>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
