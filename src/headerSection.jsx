import "./headerSection.css";

export default function HeaderSection() {
  return (
    <div id="headerSection">
      <div id="leftSide">
        <div className="logoContainer">
          <img src="" alt="logo" width={50 + "px"} height={50 + "px"} />
        </div>
        <div className="headingContainer">Neo Metaliks LTD</div>
      </div>
      <div id="rightSide">
        <div className="linksCard" id="homeLink">
          Home
        </div>
        <div className="linksCard">*Dummy*</div>
        <div className="linksCard">*Dummy*</div>
      </div>
    </div>
  );
}
