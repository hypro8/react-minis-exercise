import React, { useEffect, useState } from "react";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  console.log(hex);
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeoutID = setTimeout(() => setAlert(false), 500);
    return () => clearTimeout(timeoutID);
  }, [alert]);

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
