const TitleText = (prop: any) => {
  //console.log("🚀 ~ prop:", prop);
  return (
    <div>
      <div className="label">عنوان القصيدة (نص قصير)</div>
      <div className="text-container">
        <div id="p-title" className="content p-title">
          {prop.title[0].poem_title}
        </div>
        <span className="copy-icon" id="copy-btn">
          📋
        </span>
      </div>
    </div>
  );
};

export default TitleText;
