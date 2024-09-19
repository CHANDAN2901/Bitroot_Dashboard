// import React from 'react';
// import { Card, Row, Col, Typography, Space } from 'antd';
// import { LeftCircleTwoTone, FilterTwoTone, FilePdfTwoTone } from '@ant-design/icons';

// const { Title, Text } = Typography;

// const documents = {
//     fromThem: ['Document1.Pdf', 'Document1.Pdf', 'Document1.Pdf', 'Document1.Pdf', 'Document1.Pdf', 'Document1.Pdf'],
//     fromYou: ['Document1.Pdf', 'Document1.Pdf']
//   };

// const DocumentList = () => {
//   return (
//     <Card
//       title={
//         <Space>
//           <LeftCircleTwoTone style={{ fontSize: '32px' }} />
//           <Text style={{fontSize:'32px', }}>Documents</Text>
//         </Space>
//       }
//       extra={<FilterTwoTone style={{ fontSize: '24px' }} />}
//       headStyle={{ borderBottom: 'none' }}
//     >
//       <Space direction="vertical" size="large" style={{ width: '100%' }}>
//         <Space>
//           <FilePdfTwoTone style={{ fontSize: '24px' }} />
//           <Text>Documents</Text>
//         </Space>
        
//         <div className='pb-6'>
//           <Title level={5} style={{paddingBottom:'2vh'}}>From Them:</Title>
//           <Row gutter={[16, 16]}>
//             {documents.fromThem.map((doc, index) => (
//               <Col key={index} xs={12} sm={8} md={6} lg={4}>
//                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//                   <img src="/PdfIcon.png" alt="PDF" style={{ width: '32px', height: '32px', marginBottom: '4px' }} />
//                   <Text style={{ color: '#1890ff' }}>{doc}</Text>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </div>
        
//         <div>
//           <Title level={5} style={{paddingBottom:'2vh'}}>From You:</Title>
//           <Row gutter={[16, 16]}>
//             {documents.fromYou.map((doc, index) => (
//               <Col key={index} xs={12} sm={8} md={6} lg={4}>
//                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//                   <img src="/PdfIcon.png" alt="PDF" style={{ width: '32px', height: '32px', marginBottom: '4px' }} />
//                   <Text style={{ color: '#1890ff' }}>{doc}</Text>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </Space>
//     </Card>
//   );
// };

// export default DocumentList;



import React from 'react';
import { Card, Row, Col, Typography, Space } from 'antd';
import { LeftCircleTwoTone, FilterTwoTone, FilePdfTwoTone } from '@ant-design/icons';

const { Title, Text } = Typography;

const documents = {
  fromThem: ['Document1.Pdf', 'Document1.Pdf', 'Document1.Pdf', 'Document1.Pdf', 'Document1.Pdf', 'Document1.Pdf'],
  fromYou: ['Document1.Pdf', 'Document1.Pdf']
};

const DocumentList = () => {
  return (
    <Card
      title={
        <Space align="center" style={{ width: '100%' }}>
          <LeftCircleTwoTone style={{ fontSize: '32px' }} />
          <Text strong style={{ fontSize: '32px' }}>Documents</Text>
        </Space>
      }
    >
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Space align="center" style={{ width: '100%', justifyContent: 'space-between', paddingBottom:'8px',borderBottom:'1px solid gray' }}>
          <Space>
            <FilePdfTwoTone style={{ fontSize: '28px' }} />
            <Text>Documents</Text>
          </Space>
          <FilterTwoTone style={{ fontSize: '24px' }} />
        </Space>
        
        <div className='pb-6'>
          <Title level={5} style={{paddingBottom:'2vh'}}>From Them:</Title>
          <Row gutter={[16, 16]}>
            {documents.fromThem.map((doc, index) => (
              <Col key={index} xs={12} sm={8} md={6} lg={4}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <img src="/PdfIcon.png" alt="PDF" style={{ width: '32px', height: '32px', marginBottom: '4px' }} />
                  <Text style={{ color: '#1890ff' }}>{doc}</Text>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        
        <div>
          <Title level={5} style={{paddingBottom:'2vh'}}>From You:</Title>
          <Row gutter={[16, 16]}>
            {documents.fromYou.map((doc, index) => (
              <Col key={index} xs={12} sm={8} md={6} lg={4}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <img src="/PdfIcon.png" alt="PDF" style={{ width: '32px', height: '32px', marginBottom: '4px' }} />
                  <Text style={{ color: '#1890ff' }}>{doc}</Text>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Space>
    </Card>
  );
};

export default DocumentList;