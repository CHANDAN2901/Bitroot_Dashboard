import React, { useState } from "react";
import { Form, Input, Button, Select, Typography, Steps, message } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import "../../index.css";

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const OnboardingQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (currentStep < 1) {
      setCurrentStep(currentStep + 1);
    } else {
      message.success("Form submitted successfully!");
      setCurrentStep(currentStep + 1);
    }
  };

  const steps = [
    {
      title: "Basic Info",
      content: (
        <>
          <Form.Item
            name="companyName"
            label="Company Name"
            rules={[{ required: true }]}
          >
            <Input className="text-lg h-12 bg-blue-50 rounded-full" />
          </Form.Item>
          <Form.Item
            name="companyType"
            label="Company Type"
            rules={[{ required: true }]}
          >
            <Select className="text-lg h-12 bg-blue-50 rounded-full custom-select">
              <Select.Option value="startup">Startup</Select.Option>
              <Select.Option value="sme">SME</Select.Option>
              <Select.Option value="enterprise">Enterprise</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="teamStrength"
            label="Team Strength"
            rules={[{ required: true }]}
          >
            <Select className="text-lg h-12 bg-blue-50 rounded-full custom-select">
              <Select.Option value="1-10">1-10</Select.Option>
              <Select.Option value="11-50">11-50</Select.Option>
              <Select.Option value="51-200">51-200</Select.Option>
              <Select.Option value="201+">201+</Select.Option>
            </Select>
          </Form.Item>
        </>
      ),
    },
    {
      title: "Business Details",
      content: (
        <>
          <Form.Item
            name="industryType"
            label="Industry Type"
            rules={[{ required: true }]}
          >
            <Select className="text-lg h-12 bg-blue-50 rounded-full custom-select">
              <Select.Option value="technology">Technology</Select.Option>
              <Select.Option value="finance">Finance</Select.Option>
              <Select.Option value="healthcare">Healthcare</Select.Option>
              <Select.Option value="education">Education</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="projectDescription"
            label="Project Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              rows={4}
              className="text-lg bg-blue-50 rounded-3xl"
            />
          </Form.Item>
          <Form.Item
            name="budget"
            label="Estimated Budget"
            rules={[{ required: true }]}
          >
            <Select className="text-lg h-12 bg-blue-50 rounded-full custom-select">
              <Select.Option value="<10k">Less than $10,000</Select.Option>
              <Select.Option value="10k-50k">$10,000 - $50,000</Select.Option>
              <Select.Option value="50k-100k">$50,000 - $100,000</Select.Option>
              <Select.Option value="100k+">$100,000+</Select.Option>
            </Select>
          </Form.Item>
        </>
      ),
    },
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Left side */}
      <div className="w-1/2 bg-blue-50 p-12 flex flex-col justify-between rounded-3xl ">
        <div>
          <h1 className="text-7xl font-bold mb-2">Enter the</h1>
          <h2 className="text-7xl font-bold">Future with</h2>
          <h2 className="text-7xl font-bold text-blue-600">Bitroot</h2>
        </div>
        <div>
          <img
            src="steps-success.png"
            alt="Steps Success"
            className="w-max max-w-md"
          />
        </div>
      </div>

      <div className="w-1/2 p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          {currentStep < 2 ? (
            <>
              <div className="flex justify-center mb-8">
                <img src="logo.png" alt="Bitroot Logo" className="w-40 h-12" />
              </div>
              <Title
                level={2}
                className="text-3xl font-semibold mb-2 text-center"
              >
                Customize Your Organization for Future Growth
              </Title>
              <Paragraph className="mb-8 text-gray-600 text-2xl text-center">
                Set up company details for smooth onboarding and future growth.
              </Paragraph>
              <Steps current={currentStep} className="mb-8 ">
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                {steps[currentStep].content}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full"
                  >
                    {currentStep < 1 ? "Continue" : "Submit"}
                  </Button>
                </Form.Item>
              </Form>
            </>
          ) : (
            <div className="text-center">
              <CheckCircleFilled
                style={{ fontSize: "64px", color: "#1890ff" }}
              />
              <Title level={2} className="mt-4 text-3xl font-semibold">
                Account created successfully!
              </Title>
              <Paragraph className="text-gray-600 text-2xl">
                Welcome aboard! Start your success journey with Bitroot!
              </Paragraph>
              <Button
                type="primary"
                className="mt-5 h-12 bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full"
              >
                Let's Start!
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingQuestions;
