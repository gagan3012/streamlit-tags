import { css, setup } from "goober";
import React, { useEffect, useState } from "react";

import cc from "./classnames";
import Tag from "./tag";
import {Hint} from "../react-autocomplete-hint";



export interface IHintOption {
    id: string | number;
    label: string;
}

export interface TagsInputProps {
  name?: string;
  placeHolder?: string;
  value: string[];
  onChange?: (tags: string[]) => void;
  suggestions: Array<string> | Array<IHintOption>;
  onBlur?: any;
  separators?: string[];
  onExisting?: (tag: string) => void;
  onRemoved?: (tag: string) => void;
  maxTags: number;
}

// initialize goober once
setup(React.createElement);

const RTIContainer = css({
  "--rtiBg": "#fff",
  "--rtiBorder": "#ccc",
  "--rtiMain": "#3182ce",
  "--rtiRadius": "0.375rem",
  "--rtiS": "0.5rem",
  "--rtiTag": "#edf2f7",
  "--rtiTagRemove": "#e53e3e",

  "*": {
    boxSizing: "border-box",
    transition: "all 0.2s ease",
  },

  alignItems: "center",
  bg: "var(--rti-bg)",
  border: "1px solid var(--rti-border)",
  borderRadius: "var(--rti-radius)",
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--rti-s)",
  lineHeight: 1.4,
  padding: "var(--rti-s)",

  "&:focus-within": {
    borderColor: "var(--rti-main)",
    boxShadow: "var(--rti-main) 0px 0px 0px 1px",
  },
});

const RTIInput = css({
  border: 0,
  outline: 0,
  fontSize: "inherit",
  lineHeight: "inherit",
  width: "100%",
});

const defaultSeprators = ["Enter"];

export const TagsInput = ({
  name,
  placeHolder,
  value,
  onChange,
  onBlur,
  separators,
  onExisting,
  onRemoved,
  suggestions,
  maxTags
}: TagsInputProps) => {
  let [tags, setTags] = useState(value || []);

  useEffect(() => {
    onChange && onChange(tags);
  }, [tags]);

  if (maxTags >= 0) {
      let remainingLimit = Math.max(maxTags, 0)
      tags = tags.slice(0, remainingLimit)
  }

  const handleOnKeyUp = (e) => {
    e.stopPropagation();

    const text = e.target.value;

    if (e.key === "Backspace" && tags.length && !text) {
      setTags(tags.slice(0, -1));
    }


    if (text && (separators || defaultSeprators).includes(e.key)) {
      if (tags.includes(text)) {
        onExisting && onExisting(text);
        return;
      }
      setTags([...tags, text]);
      e.target.value = "";
      e.preventDefault();
    }
  };

  const onTagRemove = (text: string) => {
    setTags(tags.filter(tag => tag !== text));
    onRemoved && onRemoved(text);
  };

  return (
    <div aria-labelledby={name} className={cc("rti--container", RTIContainer)}>
      {tags.map(tag => (
        <Tag key={tag} text={tag} remove={onTagRemove} />
      ))}

      <Hint options={suggestions} allowTabFill={true}>
          <input
              className={cc("rti--input", RTIInput)}
              type="text"
              name={name}
              placeholder={placeHolder}
              onKeyDown={handleOnKeyUp}
              onBlur={onBlur}
      />
    </Hint>
    </div>
  );
};