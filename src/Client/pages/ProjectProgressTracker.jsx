import React, { useState } from "react";
import { Timeline, Typography, Button } from "antd";
import {
  CheckCircleFilled,
  ClockCircleFilled,
  LockOutlined,
  LockFilled,
  ClockCircleOutlined,
} from "@ant-design/icons";
import ProjectStageModal from "../components/ProjectStageModal";

const { Text } = Typography;

const stages = [
  {
    title: "Start",
    status: "complete",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Ideation",
    status: "complete",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Brainstorming",
    status: "complete",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Requirement Gathering",
    status: "complete",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Scope Finalization",
    status: "in-progress",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Documentation",
    status: "pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Build",
    status: "pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Test",
    status: "pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Deploy",
    status: "pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Feedback",
    status: "pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Closure",
    status: "pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "End",
    status: "pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const getIcon = (status) => {
  switch (status) {
    case "complete":
      return (
        <CheckCircleFilled style={{ fontSize: "30px", color: "#ffffff" }} />
      );
    case "in-progress":
      return (
        <ClockCircleFilled style={{ fontSize: "30px", color: "#ffffff" }} />
      );

    default:
      return (
        <div className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center border-[8px] border-gray-400 group-hover:border-white transition-colors duration-300">
          <LockFilled style={{ fontSize: "24px", color: "#9CA3AF" }} />
        </div>
      );
  }
};

const ProjectTimelineTracker = () => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleStageClick = (stage) => {
    if (stage.status !== "pending") {
      setSelectedStage(stage);
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center bg-fixed p-8"
      style={{
        background: "radial-gradient(circle at center, #60a5fa, #ffffff)",
      }}
    >
      <div className="flex justify-start items-center mb-12 pl-2">
        <ClockCircleOutlined className="text-blue-600 text-3xl" />
        <h1 className="text-3xl font-bold ml-4">Project Progress</h1>
      </div>
      <Timeline
        mode="alternate"
        className="custom-timeline"
        items={stages.map((stage, index) => ({
          dot: (
            <Button
              type="primary"
              shape="circle"
              icon={getIcon(stage.status)}
              onClick={() => handleStageClick(stage)}
              style={{ width: "48px", height: "48px", padding: 0 }}
              className={`flex items-center justify-center shadow-xl transition-colors duration-300 group ${
                stage.status === "complete" || stage.status === "in-progress"
                  ? "hover:bg-blue-700 shadow-blue-500/50"
                  : "cursor-not-allowed"
              } border-none`}
              disabled={
                stage.status !== "complete" && stage.status !== "in-progress"
              }
            />
          ),
          children: (
            <div
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center w-full ${index % 2 === 0 ? "pl-8" : "pr-8"}`}
            >
              <div
                className={`text-${index % 2 === 0 ? "left" : "right"} w-full`}
              >
                <Text strong className="text-xl block mb-2">
                  {stage.title}
                </Text>
                <Text className="text-base text-gray-700 block">
                  {stage.description}
                </Text>
              </div>
            </div>
          ),
        }))}
      />
      <ProjectStageModal
        visible={modalVisible}
        onClose={handleCloseModal}
        stage={selectedStage}
      />
      <style>{`
          .custom-timeline .ant-timeline-item-head {
            background: none !important;
            padding: 0 !important;
          }
          .custom-timeline .ant-timeline-item-head-custom {
            background: none !important;
            width: auto !important;
            height: auto !important;
            margin-top: 0 !important;
            padding: 0 !important;
          }
          .custom-timeline .ant-timeline-item-tail {
            border-left: 4px solid #2563eb !important;
          }
          .custom-timeline .ant-timeline-item {
            padding-bottom: 80px;
          }
          .custom-timeline .ant-timeline-item-pending .ant-timeline-item-tail {
            border-left: 4px solid #9CA3AF !important;
          }
        `}</style>
    </div>
  );
};

export default ProjectTimelineTracker;
