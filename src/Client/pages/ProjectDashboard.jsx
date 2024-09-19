// // import React, { useState } from "react";
// // import {
// //   Layout,
// //   Card,
// //   Calendar,
// //   Typography,
// //   Row,
// //   Col,
// //   Button,
// //   Menu,
// //   Modal,
// // } from "antd";
// // import {
// //   LogoutOutlined,
// //   ArrowRightOutlined,
// // } from "@ant-design/icons";
// // import "../components/HeaderComponent";
// // import HeaderComponent from "../components/HeaderComponent";

// // const { Header, Content } = Layout;
// // const { Title, Text } = Typography;

// // const projectData = {
// //   projectName: "Bitroot DashBoard",
// //   clientName: "Chandan Yadav",
// //   currentStage: "Scope Finalization",
// //   previousStage: "Requirement Gathering",
// //   nextStage: "Documentation",
// //   totalMilestones: 10,
// //   milestonesReached: 3,
// // };

// // const CircularArrowButton = () => (
// //   <Button
// //     type="primary"
// //     shape="circle"
// //     icon={<ArrowRightOutlined />}
// //     className="bg-blue-500 hover:bg-blue-600 border-none shadow-md "
// //   />
// // );

// // const ProjectDashboard = () => {
// //   const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

// //   const showLogoutModal = () => setIsLogoutModalVisible(true);
// //   const handleLogout = () => setIsLogoutModalVisible(false);
// //   const handleCancel = () => setIsLogoutModalVisible(false);

// //   const menu = (
// //     <Menu>
// //       <Menu.Item key="1" icon={<LogoutOutlined />} onClick={showLogoutModal}>
// //         Logout
// //       </Menu.Item>
// //     </Menu>
// //   );

// //   return (
// //     <Layout className="min-h-screen bg-[radial-gradient(circle_at_bottom,theme(colors.blue.300),white)]">
// //       {" "}
// //       <HeaderComponent
// //         clientName={projectData.clientName}
// //         onLogout={showLogoutModal}
// //       />
// //       <Content className=" p-6 pt-0 sm:pl-12 sm:pr-12 sm:pt-6">
// //         <Title level={2} className="mb-6">
// //           <span className="text-lg font-bold sm:text-4xl">{projectData.projectName}</span>
// //         </Title>
// //         <Row gutter={[30, 30]}>
// //           <Col xs={24} md={12}>
// //           <div>
// //             <Card
// //               title="Progress"
// //               extra={
// //                 <Text className="text-gray-500">
// //                   Check at which stage you are
// //                 </Text>
// //               }
// //               className="h-full shadow-md"
// //             >
// //               <Card className="bg-blue-50 mb-6 border-blue-200">
// //                 <Text strong>{projectData.currentStage}</Text>
// //               </Card>
// //               <div className="border rounded-md p-6 mb-6">
// //                 <Row gutter={[16, 16]} className="mb-6">
// //                   <Col span={12}>
// //                     <div className="bg-gray-100 p-4 rounded-lg">
// //                       <Title level={2} className="m-0">
// //                         {projectData.totalMilestones}
// //                       </Title>
// //                       <Text>Milestones</Text>
// //                     </div>
// //                   </Col>
// //                   <Col span={12}>
// //                     <div className="bg-gray-100 p-4 rounded-lg">
// //                       <Title level={2} className="m-0">
// //                         {projectData.milestonesReached}
// //                       </Title>
// //                       <Text>Milestones Reached</Text>
// //                     </div>
// //                   </Col>
// //                 </Row>
// //                 <Row gutter={[16, 16]}>
// //                   <Col span={12}>
// //                     <div className="bg-gray-100 p-4 rounded-lg">
// //                       <Text type="secondary">Previous Stage</Text>
// //                       <Text strong className="block uppercase">
// //                         {projectData.previousStage}
// //                       </Text>
// //                     </div>
// //                   </Col>
// //                   <Col span={12}>
// //                     <div className="bg-gray-100 p-4 rounded-lg">
// //                       <Text type="secondary">Next Stage</Text>
// //                       <Text strong className="block uppercase">
// //                         {projectData.nextStage}
// //                       </Text>
// //                     </div>
// //                   </Col>
// //                 </Row>
// //               </div>
// //               {/* <Row justify="space-between" align="middle">
// //                 <Text strong className="text-lg">
// //                   Stage 2
// //                 </Text>
// //                 <CircularArrowButton />
// //               </Row> */}
// //             </Card>
// //             <Row justify="space-between" align="middle">
// //                 <Text strong className="text-lg">
// //                   Stage 2
// //                 </Text>
// //                 <CircularArrowButton />
// //               </Row>
// //             </div>
// //           </Col>
// //           <Col xs={24} md={12}>
// //             <Card
// //               title="Calendar"
// //               extra={
// //                 <Text className="text-gray-500">
// //                   Check your upcoming schedules
// //                 </Text>
// //               }
// //               className="mb-6 shadow-md"
// //             >
// //               <Calendar fullscreen={false} />
// //             </Card>
// //             <Row gutter={[24, 24]}>
// //               <Col xs={24} sm={12}>
// //                 <Card
// //                   title="Chats"
// //                   extra={<Text className="text-gray-500">Let's Interact</Text>}
// //                   className="shadow-md"
// //                 >
// //                   <div className="h-24 bg-gray-50 flex justify-center items-center mb-4">
// //                     Chat Component
// //                   </div>
// //                   <div className="flex justify-end">
// //                     <CircularArrowButton />
// //                   </div>
// //                 </Card>
// //               </Col>
// //               <Col xs={24} sm={12}>
// //                 <Card
// //                   title="Documents"
// //                   extra={
// //                     <Text className="text-gray-500">
// //                       Check the documents here
// //                     </Text>
// //                   }
// //                   className="shadow-md"
// //                 >
// //                   <div className="h-24 bg-gray-50 flex justify-center items-center mb-4">
// //                     Documents Component
// //                   </div>
// //                   <div className="flex justify-end">
// //                     <CircularArrowButton />
// //                   </div>
// //                 </Card>
// //               </Col>
// //             </Row>
// //           </Col>
// //         </Row>
// //       </Content>
// //       <Modal
// //         title="Logout Confirmation"
// //         open={isLogoutModalVisible}
// //         onOk={handleLogout}
// //         onCancel={handleCancel}
// //         okText="Logout"
// //         cancelText="Cancel"
// //       >
// //         <p>Are you sure you want to logout?</p>
// //       </Modal>
// //     </Layout>
// //   );
// // };

// // export default ProjectDashboard;

import React, { useState } from "react";
import {
  Layout,
  Card,
  Calendar,
  Typography,
  Row,
  Col,
  Button,
  Menu,
  Modal,
} from "antd";
import { LogoutOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "../components/HeaderComponent";
import HeaderComponent from "../components/HeaderComponent";

const { Content } = Layout;
const { Title, Text } = Typography;

const projectData = {
  projectName: "Project Name",
  clientName: "Chandan Yadav",
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
    className="bg-blue-500 hover:bg-blue-600 border-none shadow-md "
  />
);

const ProgressBar = ({ currentStage }) => (
  <div className="relative w-full h-1 bg-blue-200 rounded-full overflow-hidden">
    <div
      className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
      style={{ width: "30%" }} // Adjust this percentage based on the current stage
    />
    <div className="absolute top-1/2 left-[30%] w-4 h-4 bg-blue-500 rounded-full transform -translate-y-1/2 -translate-x-1/2" />
  </div>
);

const CurrentStageCard = ({ currentStage }) => (
  <Card className="bg-blue-50 mb-6 border-blue-200">
    <div className="mb-2">
      <ProgressBar currentStage={currentStage} />
    </div>
    <div className="flex items-center justify-between">
      <Text strong className="text-lg">
        {currentStage}
      </Text>
      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
        Current
      </span>
    </div>
  </Card>
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
      <HeaderComponent
        clientName={projectData.clientName}
        onLogout={showLogoutModal}
      />
      <Content className="p-6 pt-0 sm:pl-12 sm:pr-12 sm:pt-6">
        <Title level={2} className="mb-6">
          <span className="text-3xl font-bold">{projectData.projectName}</span>
        </Title>
        <Row gutter={[30, 30]}>
          <Col xs={24} md={10}>
            <Card
              title={<span className="text-3xl font-semibold">Progress</span>}
              extra={
                <Text className="text-2xl text-gray-500">
                  Check at which stage you are
                </Text>
              }
              className="h-full shadow-md "
            >
              {/* <Card className="bg-blue-50 mb-6 border-blue-200">
                <Text strong className="text-lg">
                  {projectData.currentStage}
                </Text>
              </Card>
              
              */}

              <CurrentStageCard currentStage={projectData.currentStage} />
              <div className="border rounded-md p-6 mb-6">
                <Row gutter={[16, 16]} className="mb-6">
                  <Col span={12}>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Title level={1} className="m-0 text-xl font-bold">
                        {projectData.totalMilestones}
                      </Title>
                      <Text className="text-lg">Milestones</Text>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Title level={1} className="m-0 text-xl font-bold">
                        {projectData.milestonesReached}
                      </Title>
                      <Text className="text-lg">Milestones Reached</Text>
                    </div>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Text type="secondary" className="text-lg font-bold">
                        Previous Stage
                      </Text>
                      <Text strong className="block uppercase text-xl">
                        {projectData.previousStage}
                      </Text>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Text type="secondary" className="text-lg font-bold">
                        Next Stage
                      </Text>
                      <Text strong className="block uppercase text-xl">
                        {projectData.nextStage}
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row justify="space-between" align="middle">
                <Text strong className="text-xl">
                  Stage 2
                </Text>
                <CircularArrowButton />
              </Row>
            </Card>
          </Col>
          <Col xs={24} md={14}>
            <Card
              title={<span className="text-3xl font-semibold">Calendar</span>}
              extra={
                <Text className="text-2xl text-gray-500">
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
                  title={<span className="text-3xl font-semibold">Chats</span>}
                  className="shadow-md"
                >
                  <div className="h-24 bg-gray-50 flex justify-start text-2xl items-center mb-4">
                  Let's Interact
                  </div>
                  <div className="flex justify-end ">
                    <CircularArrowButton />
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  title={
                    <span className="text-3xl font-semibold">Documents</span>
                  }
                  className="shadow-md"
                >
                  <div className="h-24 bg-gray-50 flex justify-start text-2xl items-center mb-4">
                  Check the documents here
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
        open={isLogoutModalVisible}
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
