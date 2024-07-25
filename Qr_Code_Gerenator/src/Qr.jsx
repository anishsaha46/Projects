import React, { useState } from "react";
import "./Qr.css"; // Import the CSS file

const Qr = () => {
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const [qrUrl, setQrUrl] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
    setQrUrl(qrUrl);
    setShow(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "qr_code.png";
    link.click();
  };

  return (
    <div className="container">
      <form onSubmit={handleChange}>
        <input
          type="url"
          name="url"
          placeholder="Enter the URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      {show && (
        <div>
          <img alt="QR Code" src={qrUrl} />
          <button onClick={handleDownload}>Download</button>
        </div>
      )}
    </div>
  );
};

export default Qr;


