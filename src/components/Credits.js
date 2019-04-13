import React from "react";
import GitHubLogo from "../assets/GitHub_Logo.png";

const Credits = () => {
  return (
    <div style={{ textAlign: "center" }} className="GitHubLogo">
      <a
        href="https://github.com/vsahinid/derivative-calculator"
        target="_blank noopener noreferrer"
      >
        <img
          src={GitHubLogo}
          alt="GitHub Logo"
          style={{ width: "10%", height: "10%" }}
        />
      </a>
    </div>
  );
};

export default Credits;
