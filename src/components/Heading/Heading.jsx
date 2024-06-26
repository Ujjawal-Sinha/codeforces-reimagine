import "./Heading.css";

export const Heading = () => {
  return (
    <div className="heading-container">
      <div className="heading-options">
        <div className="heading-option">HOME</div>{" "}
        <div className="heading-option">TOP</div>{" "}
        <div className="heading-option">CATALOG</div>{" "}
        <div className="heading-option">CONTESTS</div>{" "}
        <div className="heading-option">GYM</div>{" "}
        <div className="heading-option">PROBLEMS</div>{" "}
        <div className="heading-option">GROUPS</div>{" "}
        <div className="heading-option">RATING</div>{" "}
        <div className="heading-option">HELP</div>{" "}
        <div className="heading-option">MORE</div>
        <input className="heading-option heading-search" type="text"></input>
      </div>
    </div>
  );
};
