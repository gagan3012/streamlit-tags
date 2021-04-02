import React from "react"
import ReactDOM from "react-dom"
import Custom_keywords from "./keywords"
import Auto_keywords from "./autocomplete"

// Lots of import to define a Styletron engine and load the light theme of baseui
// @ts-ignore
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider as StyletronProvider } from "styletron-react"
import { ThemeProvider, LightTheme } from "baseui"

const engine = new Styletron()

// Wrap your CustomSlider with the baseui them
ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <ThemeProvider theme={LightTheme}>
        <Custom_keywords />
      </ThemeProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
)