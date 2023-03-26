import "./App.css";
import TitleText from "./components/TitleText";
import ContentText from "./components/ContentText";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Divider,
  Row,
  Segmented,
  Skeleton,
  Space,
  Spin,
  Switch,
  theme,
} from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const [poems, setPoem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [poemURL, setPoemURL] = useState(
    "https://wkraomcjwgqbobeutgna.supabase.co/rest/v1/random_record?limit=1"
  );
  const [isArabic, setIsArabic] = useState(true);

  const generateNewText = () => {
    setIsLoading(true);
    axios.get(poemURL).then((res) => {
      setPoem(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    generateNewText();
  }, [poemURL]);

  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSwitchDarkMode = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  const handleLang = (e: any) => {
    setIsArabic((previousValue) => !previousValue);
    if (isArabic) {
      i18n.changeLanguage("en");

      setPoemURL(
        "https://wkraomcjwgqbobeutgna.supabase.co/rest/v1/e_random_record?limit=1"
      );
    }
    if (!isArabic) {
      i18n.changeLanguage("ar");
      setPoemURL(
        "https://wkraomcjwgqbobeutgna.supabase.co/rest/v1/random_record?limit=1"
      );
    }
  };
  const [themOptions, setThemOptions] = useState([
    t("app.darkMode"),
    t("app.lightMode"),
  ]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          fontFamily: "Alexandria",
        },
      }}
    >
      <Card bordered={false}>
        <Row>
          <Col span={8}>
            <Switch
              checkedChildren={t("app.darkMode")}
              unCheckedChildren={t("app.lightMode")}
              defaultChecked
              onClick={handleSwitchDarkMode}
            />
          </Col>
          <Col span={8} offset={8}>
            <Segmented options={["عربي", "EN"]} onChange={handleLang} />
          </Col>
        </Row>

        <Spin tip={t("app.isLoading")} spinning={isLoading}>
          <div className="App" style={{ marginTop: "15px" }}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <div>
                {poems && !isLoading && <TitleText title={poems} />}
                {isLoading && (
                  <Skeleton.Input active={isLoading} size="large" />
                )}
                <Divider style={{ margin: "10px 5px" }} />

                {poems && !isLoading && <ContentText title={poems} />}
                {isLoading && <Skeleton active={isLoading} />}
              </div>
              <Button
                type="primary"
                shape="round"
                icon={<ReloadOutlined />}
                onClick={generateNewText}
              >
                <span>{t("app.generateNewText")}</span>
              </Button>
            </Space>
          </div>
        </Spin>
      </Card>
    </ConfigProvider>
  );
}

export default App;
