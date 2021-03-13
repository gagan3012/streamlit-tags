import React, { useEffect, useState } from "react"
import { ComponentProps, Streamlit, withStreamlitConnection } from "streamlit-component-lib"
import { TagsInput } from "react-tag-input-component";


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
const CustomSlider = (props: ComponentProps) => {
  // Destructure using Typescript interface
  // This ensures typing validation for received props from Python
  const { label, text, initialValue }: PythonArgs = props.args
  const [value, setValue] = useState(initialValue)

  useEffect(() => Streamlit.setFrameHeight())
  console.log(JSON.stringify(value))
  return (
    <div>
      <h3>{label}</h3>
        <pre>{JSON.stringify(value)}</pre>
      <TagsInput
        value={value}
        onChange= {setValue}
        name={label}
        placeHolder={text}
      />
      <em>press enter or comma to add new tag</em>
    </div>
  )
}

export default withStreamlitConnection(CustomSlider)