import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
  const buttons = [
    { message: "Downloading!", children: "Download File" },
    { message: "Sharing!", children: "Share Document" },
    { message: "Saving!", children: "Save Progress" },
    { message: "Printing!", children: "Print Page" },
    { message: "Uploading!", children: "Upload File" },
  ];

  return (
    <div>
      {buttons.map((btn, index) => (
        <AlertButton key={index} message={btn.message}>
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
};

export default Toolbar;
