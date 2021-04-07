import React,{ useEffect, useState }  from "react"
import { ComponentProps, Streamlit, withStreamlitConnection } from "streamlit-component-lib"
import { TagsInput } from "./react-tag-input-componet";
import "./styles.css";

interface PythonArgs {
  label: string
  text: string
  initialValue: string[]
  suggestions: string[]
}

const Custom_keywords = (props: ComponentProps) => {
  // Destructure using Typescript interface
  // This ensures typing validation for received props from Python
  let { label, text, initialValue, suggestions}: PythonArgs = props.args
  const [value, setValue] = useState(initialValue)

  const onSubmit = (values: string[]) => {
    setValue(values)
    Streamlit.setComponentValue((values))
  }
  useEffect(() => Streamlit.setFrameHeight())
  return (
    <div>
        <TagsInput
        value={value}
        onChange= {(value) =>  onSubmit(value)}
        name={label}
        placeHolder={text}
        suggestions={suggestions}
      />
    </div>
  )
}

export default withStreamlitConnection(Custom_keywords)