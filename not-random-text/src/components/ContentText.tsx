import { useState } from "react";

const ContentText = (prop: any) => {
  console.log("🚀 ~ prop:", prop);
  const content = prop.title[0].poem_text;
  const [lengthContent, setLengthContent] = useState(100);
  // This function is called when the first range slider changes
  const changeLengthContent = (event: any) => {
    setLengthContent(event.target.value);
  };
  return (
    <div>
      <div className="label">محتوى القصيدة (نص طويل)</div>
      <div id="charRange">
        <div>
          <input
            onChange={changeLengthContent}
            type="range"
            min="20"
            max="400"
            step="20"
            value={lengthContent}
          />
          <span id="charIndicator">{lengthContent} </span>
        </div>
      </div>
      <div className="text-container">
        <div id="p-content" className="content p-content">
          {content.slice(0, lengthContent)}
        </div>
        <span className="copy-icon" id="copy-btn2">
          {" "}
          📋
        </span>
      </div>
    </div>
  );
};

export default ContentText;
