import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { application } from "../Redux/Store";

function CopyButton() {
  const [keyMessage, setKeyMessage] = useState("Key Al");
  const textToCopy = application.key;

  const handleCopy = () => {
    setKeyMessage("Key Kopyalandı");
  };

  return (
    <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
      <button className="btn btn-success">{keyMessage}</button>
    </CopyToClipboard>
  );
}

export default CopyButton;
