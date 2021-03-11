import React, { useEffect, useState } from "react"
import { ComponentProps, Streamlit, withStreamlitConnection } from "streamlit-component-lib"
import { Slider } from "baseui/slider"

/**
 * We can use a Typescript interface to destructure the arguments from Python
 * and validate the types of the input
 */
interface PythonArgs {
  label: string
  minValue?: number
  maxValue?: number
  initialValue: number[]
}

/**
 * No more props manipulation in the code.
 * We store props in state and pass value directly to underlying Slider
 * and then back to Streamlit.
 */
const CustomSlider = (props: ComponentProps) => {
  // Destructure using Typescript interface
  // This ensures typing validation for received props from Python
  const { label, minValue, maxValue, initialValue }: PythonArgs = props.args
  const [value, setValue] = useState(initialValue)

  useEffect(() => Streamlit.setFrameHeight())

  return (
    <>
      <h3>{label}</h3>
      <Slider
        value={value}
        onChange={({ value }) => value && setValue(value)}
        onFinalChange={({ value }) => Streamlit.setComponentValue(value)}
        min={minValue}
        max={maxValue}
      />
    </>
  )
}

export default withStreamlitConnection(CustomSlider)