import React, { useState } from 'react';
import { Drawer, Typography, Button, Input, List, Avatar } from 'antd';
import { UploadOutlined, SendOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const demoDocuments = [
  { name: 'Document1.pdf', from: 'them' },
  { name: 'Document2.pdf', from: 'them' },
  { name: 'Document3.pdf', from: 'you' },
];

const demoComments = [
  { author: 'Client Name', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { author: 'Admin', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { author: 'Client Name', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const CommentItem = ({ author, content }) => (
  <div className="flex items-start mb-4">
    <Avatar className="mr-4">{author[0]}</Avatar>
    <div>
      <Text strong>{author}</Text>
      <Text className="block">{content}</Text>
    </div>
  </div>
);

const ProjectStageModal = ({ visible, onClose, stage }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    // Here you would typically send the comment to your API
    console.log('Submitting comment:', comment);
    setComment('');
  };

  return (
    <Drawer
      title={stage?.title}
      placement="right"
      onClose={onClose}
      open={visible}
      width={400}
      styles={{ body: { padding: 0 } }}
    >
      <div className="p-4">
        <Title level={4}>Documents</Title>
        <List
          dataSource={demoDocuments}
          renderItem={(item) => (
            <List.Item>
              <Button type="link" icon={<img src='PdfIcon.png' className='size-6'/>}>
                {item.name}
              </Button>
              <Text type="secondary">From: {item.from}</Text>
            </List.Item>
          )}
        />
        <div className="mt-4">
          <Button icon={<UploadOutlined />}>Upload A File</Button>
        </div>
      </div>
      <div className="p-4 border-t">
        <Title level={4}>Comments</Title>
        <List
          dataSource={demoComments}
          renderItem={(item) => (
            <CommentItem author={item.author} content={item.content} />
          )}
        />
        <div className="mt-4">
          <TextArea
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Type your comment here"
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleCommentSubmit}
            className="mt-2"
          >
            Send
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default ProjectStageModal;