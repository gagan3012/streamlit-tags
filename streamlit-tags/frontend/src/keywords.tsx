import React,{ useEffect, useState }  from "react"
import { ComponentProps, Streamlit, withStreamlitConnection } from "streamlit-component-lib"
import { TagsInput } from "react-tag-input-component";
import "./styles.css";

/**
 * We can use a Typescript interface to destructure the arguments from Python
 * and validate the types of the input
 */
interface PythonArgs {
  label: string
  text: string
  initialValue: string[]
}

/**
 * No more props manipulation in the code.
 * We store props in state and pass value directly to underlying Slider
 * and then back to Streamlit.
 */

const Custom_keywords = (props: ComponentProps) => {
  // Destructure using Typescript interface
  // This ensures typing validation for received props from Python
  const { label, text, initialValue }: PythonArgs = props.args
  const [value, setValue] = useState(initialValue)

  const onSubmit = (values: any) => {
    Streamlit.setComponentValue(values)
    return true
  }
  useEffect(() => Streamlit.setFrameHeight())
  return (
    <div>
        <h3>{label}</h3>
        <TagsInput
        value={value}
        onChange= {(value) =>  onSubmit(value) && setValue(value)}
        name={label}
        placeHolder={text}
      />
    </div>
  )
}

export default withStreamlitConnection(Custom_keywords)