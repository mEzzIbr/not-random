import { Card, Col, InputNumber, Row, Slider } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useState } from "react";

const ContentText = (prop: any) => {
  console.log("🚀 ~ prop:", prop);
  const content = prop.title[0].poem_text;
  const [editableContent, setEditableContent] = useState(content);

  const [lengthContent, setLengthContent] = useState(100);

  const changeLengthContent = (newValue: any) => {
    setLengthContent(newValue);
  };

  return (
    <div>
      <Title level={5}>محتوى القصيدة (نص طويل)</Title>

      <Row justify="space-around">
        <Col span={12}>
          <Slider
            min={20}
            max={1000}
            onChange={changeLengthContent}
            value={typeof lengthContent === "number" ? lengthContent : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={20}
            max={400}
            style={{ margin: "0 16px" }}
            value={lengthContent}
            onChange={changeLengthContent}
          />
        </Col>
      </Row>
      <br />
      <Card bodyStyle={{ padding: "3px 2px" }}>
        <Paragraph
          copyable={{ tooltips: ["انقر لنسخ النص", "تم النسخ"] }}
          editable={{
            tooltip: "انقر لتعديل النص",
            triggerType: ["icon", "text"],
            onChange: setEditableContent,
          }}
        >
          {editableContent.slice(0, lengthContent)}
        </Paragraph>
      </Card>
    </div>
  );
};

export default ContentText;
