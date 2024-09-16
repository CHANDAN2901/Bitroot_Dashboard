import React, { useState } from 'react';
import { Form, Input, Button, Select, Typography, Steps, message } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (currentStep < 1) {
      setCurrentStep(currentStep + 1);
    } else {
      message.success('Form submitted successfully!');
      setCurrentStep(currentStep + 1);
    }
  };

  const steps = [
    {
      title: 'Basic Info',
      content: (
        <>
          <Form.Item className='text-3xl' name="companyName" label="Company Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="companyType" label="Company Type" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="startup">Startup</Select.Option>
              <Select.Option value="sme">SME</Select.Option>
              <Select.Option value="enterprise">Enterprise</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="teamStrength" label="Team Strength" rules={[{ required: true }]}>
            <Select>
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
      title: 'Business Details',
      content: (
        <>
          <Form.Item name="industryType" label="Industry Type" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="technology">Technology</Select.Option>
              <Select.Option value="finance">Finance</Select.Option>
              <Select.Option value="healthcare">Healthcare</Select.Option>
              <Select.Option value="education">Education</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="projectDescription" label="Project Description" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item name="budget" label="Estimated Budget" rules={[{ required: true }]}>
            <Select>
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
      <div className="w-2/5 bg-blue-50 p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome to</h1>
          <h2 className="text-6xl font-bold text-blue-900">Bitroot Dashboard</h2>
        </div>
        <div>
          <img src="../logo.png" alt="Bitroot Logo" className="w-48" />
        </div>
      </div>

      <div className="w-3/5 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {currentStep < 2 ? (
            <>
              <Title level={2}>Customize your Organization</Title>
              <Paragraph className='text-lg'>Setup your organization for members that may join later.</Paragraph>
              <Steps current={currentStep}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <Form 
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="mt-8"
              >
                {steps[currentStep].content}
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full h-10">
                    {currentStep < 1 ? 'Continue' : 'Submit'}
                  </Button>
                </Form.Item>
              </Form>
            </>
          ) : (
            <div className="text-center">
              <CheckCircleFilled style={{ fontSize: '64px', color: '#1890ff' }} />
              <Title level={2} className='mt-4'>Account created successfully!</Title>
              <Paragraph className='text-lg'>Welcome aboard! Start your success journey with Bitroot!</Paragraph>
              <Button type="primary" className="mt-5 h-10 text-lg">Let's Start!</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;