import React from "react";
import GitHubLogo from "../assets/GitHub_Logo.png";

const Credits = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <a
        href="https://github.com/vsahinid/derivative-calculator"
        target="_blank"
      >
        <img
          src={GitHubLogo}
          alt="GitHub Logo"
          style={{ width: "20%", height: "20%" }}
        />
      </a>
    </div>
  );
};

export default Credits;
