import { Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const TitleText = (prop: any) => {
  const [editableStr, setEditableStr] = useState(prop.title[0].poem_title);
  const { t } = useTranslation();

  return (
    <div>
      <Title level={5}> {t("app.titlePoem")}</Title>
      <Card bodyStyle={{ padding: "3px 2px" }}>
        <Paragraph
          copyable={{ tooltips: [t("app.clickToCopy"), t("app.copied")] }}
          editable={{
            tooltip: t("app.clickToEdit"),
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
