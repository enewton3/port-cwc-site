import React from "react";

export default function DonateForm() {
  return (
    <iframe
      id="mc-donation"
      title="donation-form"
      src="https://app.mobilecause.com/form/xfev2Q?utm_source=embed&utm_medium=page&utm_campaign=donation"
      width="100%"
      height="100%"
      overflow="scroll"
      onLoad={window.scrollTo(0, 0)}
    ></iframe>
  );
}
