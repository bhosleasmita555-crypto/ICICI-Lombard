import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <a href="/">Home</a>
      <span>&gt;</span>
      <span className="active">Business Insurance</span>
    </div>
  );
};

export default Breadcrumb;
