import React, { useState } from "react";
import {
  Layout,
  Card,
  Calendar,
  Typography,
  Row,
  Col,
  Button,
  Avatar,
  Dropdown,
  Menu,
} from "antd";
import {
  UserOutlined,
  SettingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const projectData = {
  projectName: "Project Name",
  clientName: "Client Name",
  currentStage: "Scope Finalization",
  previousStage: "Requirement Gathering",
  nextStage: "Documentation",
  totalMilestones: 10,
  milestonesReached: 3,
};

const CircularArrowButton = () => (
  <Button
    type="primary"
    shape="circle"
    icon={<ArrowRightOutlined />}
    className="bg-blue-500 hover:bg-blue-600 border-none shadow-md"
  />
);

const ProjectDashboard = () => {
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const showLogoutModal = () => setIsLogoutModalVisible(true);
  const handleLogout = () => setIsLogoutModalVisible(false);
  const handleCancel = () => setIsLogoutModalVisible(false);

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<LogoutOutlined />} onClick={showLogoutModal}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="min-h-screen bg-[radial-gradient(circle_at_bottom,theme(colors.blue.500),white)]">
      {" "}
      <Header className="bg-white px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Bitroot" className="h-8 mr-2" />
        </div>
        <div className="flex items-center">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button type="link" className="flex items-center">
              <Avatar icon={<UserOutlined />} className="mr-2 bg-blue-500" />
              {projectData.clientName}
            </Button>
          </Dropdown>
          <Button
            type="text"
            icon={<SettingOutlined />}
            className="ml-4 text-blue-500"
          />
        </div>
      </Header>
      <Content className="p-8">
        <Title level={2} className="mb-6">
          {projectData.projectName}
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card
              title="Progress"
              extra={
                <Text className="text-gray-500">
                  Check at which stage you are
                </Text>
              }
              className="h-full shadow-md"
            >
              <Card className="bg-blue-50 mb-6 border-blue-200">
                <Text strong>{projectData.currentStage}</Text>
              </Card>
              <div className="border rounded-md p-6 mb-6">
                <Row gutter={[16, 16]} className="mb-6">
                  <Col span={12}>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Title level={2} className="m-0">
                        {projectData.totalMilestones}
                      </Title>
                      <Text>Milestones</Text>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Title level={2} className="m-0">
                        {projectData.milestonesReached}
                      </Title>
                      <Text>Milestones Reached</Text>
                    </div>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Text type="secondary">Previous Stage</Text>
                      <Text strong className="block uppercase">
                        {projectData.previousStage}
                      </Text>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Text type="secondary">Next Stage</Text>
                      <Text strong className="block uppercase">
                        {projectData.nextStage}
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row justify="space-between" align="middle">
                <Text strong className="text-lg">
                  Stage 2
                </Text>
                <CircularArrowButton />
              </Row>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title="Calendar"
              extra={
                <Text className="text-gray-500">
                  Check your upcoming schedules
                </Text>
              }
              className="mb-6 shadow-md"
            >
              <Calendar fullscreen={false} />
            </Card>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12}>
                <Card
                  title="Chats"
                  extra={<Text className="text-gray-500">Let's Interact</Text>}
                  className="shadow-md"
                >
                  <div className="h-24 bg-gray-50 flex justify-center items-center mb-4">
                    Chat Component
                  </div>
                  <div className="flex justify-end">
                    <CircularArrowButton />
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  title="Documents"
                  extra={
                    <Text className="text-gray-500">
                      Check the documents here
                    </Text>
                  }
                  className="shadow-md"
                >
                  <div className="h-24 bg-gray-50 flex justify-center items-center mb-4">
                    Documents Component
                  </div>
                  <div className="flex justify-end">
                    <CircularArrowButton />
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Modal
        title="Logout Confirmation"
        visible={isLogoutModalVisible}
        onOk={handleLogout}
        onCancel={handleCancel}
        okText="Logout"
        cancelText="Cancel"
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </Layout>
  );
};

export default ProjectDashboard;
