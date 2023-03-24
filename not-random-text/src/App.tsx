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
  Skeleton,
  Space,
  Spin,
  Switch,
  theme,
} from "antd";
import { ReloadOutlined } from "@ant-design/icons";
function App() {
  const [poems, setPoem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [poemURL, setPoemURL] = useState("https://wkraomcjwgqbobeutgna.supabase.co/rest/v1/random_record?limit=1");
  const [isArabic, setIsArabic] = useState(true)

  const generateNewText = () => {
    setIsLoading(true);
    axios.get(poemURL).then((res) => {
      setPoem(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    generateNewText();
  }, []);

  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  const handleLang = () => {
    setIsArabic((previousValue) => !previousValue);
    if (isArabic) {
      setPoemURL("https://wkraomcjwgqbobeutgna.supabase.co/rest/v1/e_random_record?limit=1")
    }
    if(!isArabic) {
      setPoemURL("https://wkraomcjwgqbobeutgna.supabase.co/rest/v1/random_record?limit=1")
    }
  };

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
        <Row gutter={[48, 24]}>
          <Col span={4} >
            <Switch
              checkedChildren="داكن"
              unCheckedChildren="فاتح"
              defaultChecked
              onClick={handleClick}
            />
          </Col>
          <Col span={4}>
            <Switch
              id="LangSwitch"
              checkedChildren="AR"
              unCheckedChildren="EN"
              defaultChecked
              onChange={handleLang}
            />
          </Col>
        </Row>
        <Spin tip="جار التحميل ..." spinning={isLoading} >
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
                <span>ولد أشعارًا جديدة</span>
              </Button>
            </Space>
          </div>
        </Spin>
      </Card>
    </ConfigProvider>
  );
}

export default App;
