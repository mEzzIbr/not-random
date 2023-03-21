import { Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useState } from "react";

const TitleText = (prop: any) => {
  //console.log("🚀 ~ prop:", prop);
  const [editableStr, setEditableStr] = useState(prop.title[0].poem_title);

  return (
    <div>
      <Title level={5}>عنوان القصيدة (نص قصير)</Title>
      <Card bodyStyle={{ padding: "3px 2px" }}>
        <Paragraph
          copyable={{ tooltips: ["انقر لنسخ النص", "تم النسخ"] }}
          editable={{
            tooltip: "انقر لتعديل النص",
            triggerType: ["icon", "text"],
            onChange: setEditableStr,
          }}
        >
          {editableStr}
        </Paragraph>
      </Card>
    </div>
  );
};

export default TitleText;
