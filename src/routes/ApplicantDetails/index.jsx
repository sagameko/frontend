import { useState } from "react";
import { Table, Tag, Button, Modal, Form, Input } from "antd";

const { Column } = Table;

export const ApplicantDetails = () => {
    const mockApplicants = [
        {
            id: "1",
            name: "John Doe",
            email: "johndoe@gmail.com",
            phoneNumber: "0123456789",
            experience: "2 years",
            availability: ["Monday 2pm-5pm", "Friday 9am-12pm"],
            status: "Pending",
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "janesmith@gmail.com",
            phoneNumber: "0123456789",
            experience: "10 years",
            availability: ["Monday 2pm-5pm", "Friday 9am-12pm"],
            status: "Accepted",
        },
        {
            id: "3",
            name: "Mike Johnson",
            email: "mikejohnson@gmail.com",
            phoneNumber: "0123456789",
            experience: "4 years",
            availability: ["Monday 2pm-5pm", "Friday 9am-12pm"],
            status: "Rejected",
        },
    ];

    const [visible, setVisible] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState({});
    const [applicants, setApplicants] = useState(mockApplicants);

    const handleStatusChange = (applicantId, status) => {
        const updatedApplicants = applicants.map((applicant) => {
            if (applicant.id === applicantId) {
                return {
                    ...applicant,
                    status,
                };
            }
            return applicant;
        });
        setApplicants(updatedApplicants);
    };
    const handleModalCancel = () => {
        setVisible(false);
    };

    const handleModalOk = () => {
        const updatedApplicants = applicants.map((applicant) => {
            if (applicant.id === selectedApplicant.id) {
                return {
                    ...applicant,
                    notes: selectedApplicant.notes,
                };
            }
            return applicant;
        });
        setApplicants(updatedApplicants);
        setVisible(false);
    };

    const handleNotesChange = (event) => {
        setSelectedApplicant({
            ...selectedApplicant,
            notes: event.target.value,
        });
    };

    const showModal = (applicant) => {
        setSelectedApplicant(applicant);
        setVisible(true);
    };

    return (
        <>
            <Table dataSource={applicants}>
                <Column title="ID" dataIndex="id" key="id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column
                    title="Phone Number"
                    dataIndex="phoneNumber"
                    key="phoneNumber"
                />
                <Column
                    title="Experience"
                    dataIndex="experience"
                    key="experience"
                />
                <Column
                    title="Availability"
                    dataIndex="availability"
                    key="availability"
                    render={(availability, record) => (
                        <div>
                            {record.availability.map((time) => (
                                <p key={time}>{time}</p>
                            ))}
                        </div>
                    )}
                />
                <Column
                    title="Status"
                    dataIndex="status"
                    key="status"
                    render={(status, applicant) => (
                        <>
                            <Tag
                                color={status === "Accepted" ? "green" : "red"}
                            >
                                {status}
                            </Tag>
                            <Button
                                type="link"
                                size="small"
                                onClick={() => showModal(applicant)}
                            >
                                Note
                            </Button>
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(applicant) => (
                        <>
                            <Button
                                type="primary"
                                disabled={applicant.status === "Accepted"}
                                onClick={() =>
                                    handleStatusChange(applicant.id, "Accepted")
                                }
                            >
                                Accept
                            </Button>{" "}
                            <Button
                                type="danger"
                                disabled={applicant.status === "Rejected"}
                                onClick={() =>
                                    handleStatusChange(applicant.id, "Rejected")
                                }
                            >
                                Reject
                            </Button>
                        </>
                    )}
                />
            </Table>
            <Modal
                title=" Applicant Notes"
                open={visible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
            >
                <Form>
                    <Form.Item label="Name">{selectedApplicant.name}</Form.Item>
                    <Form.Item label="Email">
                        {selectedApplicant.email}
                    </Form.Item>
                    <Form.Item label="Notes">
                        <Input
                            value={selectedApplicant.notes}
                            onChange={handleNotesChange}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
