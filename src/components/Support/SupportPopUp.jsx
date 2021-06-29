import React from "react";
import PopupWrapper from "../PopupWrapper";

export default function SupportPopUp(props) {
  const { anchorEl, handleClose, open } = props;
  return (
    <PopupWrapper
      clickAway
      anchorEl={anchorEl}
      handleClose={handleClose}
      open={open}
      placement="left"
    >
      <div style={{ margin: "0 2vw 0 2vw", padding: "2vh 0 2vh 0" }}>
        <em>Tech Support</em> - For technical assistance, email us at{" "}
        <a href="mailto:vesupport@portlighting.com">
          vesupport@portlighting.com
        </a>
      </div>
    </PopupWrapper>
  );
}
