import React from "react";

import "./FlashAlert.css";

export default function FlashAlert({ value, show, type = "" }) {
  if (!show) return null;
  const style = "flash-alert " + type;
  return <div className={style}>{value}</div>;
}
