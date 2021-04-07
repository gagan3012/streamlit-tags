import React from "react";
import { css } from "goober";
import cc from "./classnames";

interface TagProps {
  text: string;
  remove: any;
}

const tagStyles = css({
  alignItems: "center",
  background: "var(--rti-tag)",
  borderRadius: "var(--rti-radius)",
  display: "inline-flex",
  justifyContent: "center",
  paddingLeft: "var(--rti-s)",

  button: {
    background: "none",
    border: 0,
    borderRadius: "50%",
    cursor: "pointer",
    lineHeight: "inherit",
    padding: "0 var(--rti-s)",

    "&:hover": {
      color: "var(--rti-tag-remove)",
    },
  },
});

export default function Tag({ text, remove }: TagProps) {
  const handleOnRemove = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    remove(text);
  };

  return (
    <span className={cc("rti--tag", tagStyles)}>
      <span>{text}</span>
      <button
        type="button"
        onClick={handleOnRemove}
        aria-label={`remove ${text}`}
      >
        &#10005;
      </button>
    </span>
  );
}