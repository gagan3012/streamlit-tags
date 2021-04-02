import React,{ useEffect, useState }  from "react"
import { ComponentProps, Streamlit, withStreamlitConnection, Theme } from "streamlit-component-lib"
import { TagsInput } from "react-tag-input-component";
import "./styles.css";

interface PythonArgs {
  label: string
  text: string
  initialValue: string[]
  theme?: Theme
}

const Custom_keywords = (props: ComponentProps) => {
  // Destructure using Typescript interface
  // This ensures typing validation for received props from Python
  let { label, text, initialValue , theme}: PythonArgs = props.args
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
      />
    </div>
  )
}

export default withStreamlitConnection(Custom_keywords)