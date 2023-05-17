import { Form, Input, Button, Select, DatePicker, message } from "antd";
import { useState } from "react";

export const JobForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Application submitted successfully");
        form.resetFields();
      } else {
        message.error("Failed to submit application");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: { offset: 6, span: 12 },
  };

  return (
    <Form
    form={form}
    {...formItemLayout}
    name="job_application"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
>
    <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please enter your name!" }]}
    >
        <Input />
    </Form.Item>

    <Form.Item
        name="email"
        label="Email"
        rules={[
            { required: true, message: "Please enter your email!" },
        ]}
    >
        <Input type="email" />
    </Form.Item>

    <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
            {
                required: true,
                message: "Please enter your phone number!",
            },
            {
                pattern: /^[0-9]*$/,
                message: "Please enter a valid phone number!",
            },
        ]}
    >
        <Input type="tel" />
    </Form.Item>
    <Form.Item
        label="Experience"
        name="experience"
        rules={[
            {
                required: true,
                message: "Please select your experience!",
            },
        ]}
    >
        <Select>
            <Option value="1-3 years">1-3 years</Option>
            <Option value="3-5 years">3-5 years</Option>
            <Option value="5+ years">5+ years</Option>
        </Select>
    </Form.Item>
    <Form.Item
        label="Position Applied For"
        name="position"
        rules={[
            {
                required: true,
                message:
                    "Please select the position you are applying for!",
            },
        ]}
    >
        <Select placeholder="Select a position">
            <Option value="position1">Position 1</Option>
            <Option value="position2">Position 2</Option>
            <Option value="position3">Position 3</Option>
        </Select>
    </Form.Item>

    <Form.Item
        label="Expected Salary"
        name="salary"
        rules={[
            {
                required: true,
                message: "Please input your expected salary!",
            },
        ]}
    >
        <Input />
    </Form.Item>
    <Form.Item
        label="Start Date"
        name="startdate"
        rules={[
            {
                required: true,
                message: "Please select your start date!",
            },
        ]}
    >
        <DatePicker style={{ width: "100%" }} />
    </Form.Item>
    
    <Form.Item
        name="resume"
        label="Resume"
        rules={[
            { required: true, message: "Please upload your resume!" },
        ]}
    >
        <Input type="file" accept=".pdf,.doc,.docx" />
    </Form.Item>
    
    <Form.Item
        label="Cover Letter"
        name="coverletter"
        rules={[
            {
                required: true,
                message: "Please upload your cover letter!",
            },
        ]}
    >
        <Input type="file" accept=".pdf,.doc,.docx" />
    </Form.Item>



    <Form.Item>
        <Button
            {...tailFormItemLayout}
            type="primary"
            htmlType="submit"
            className="button"
        >
            Apply
        </Button>
    </Form.Item>
</Form>
);
};