import React,{ useEffect, useState }  from "react"
import { ComponentProps, Streamlit, withStreamlitConnection } from "streamlit-component-lib"
import ReactTags from 'react-autocomplete-tag' // load ReactTags component
import Autocomplete from 'react-autocomplete-tags'
import "./styles.css";

interface PythonArgs {
  label: string
  text: string
  initialValue: string[]
  suggestions: string[]
}

const Auto_keywords = (props: ComponentProps) => {
    let { label, text, initialValue, suggestions }: PythonArgs = props.args
    const [value, setValue] = useState(initialValue)
    const [suggestion, setSuggestion] = useState(suggestions)

    const addTag = (val: string) => {
        setValue([...value, val])
        setSuggestion([])
    }

    const removeTag = (idx: number) => {
        let t = [...value];
        t.splice(idx, 1)
        setValue(t)
    }
    const handleTagChange = (val: string) => {
        // in real app, suggestions could be fetched from backend

        if (val.length > 0) {
            const new_sug: string[] = [];
            suggestions.forEach((t) => {
                if (t.includes(val)) {
                    new_sug.push(t)
                }
            })
            setSuggestion(new_sug)
        } else {
            setSuggestion([])
        }
        Streamlit.setComponentValue((suggestions))
    }

    useEffect(() => Streamlit.setFrameHeight())

    return (
        <div>
            <h3>{label}</h3>
            <ReactTags
      tags={value}
      suggestions={suggestion}
      onAddHandler={(val: string) => addTag(val)}
      onDeleteHandler={(idx: number) => removeTag(idx)}
      onChangeHandler={(val: string) => handleTagChange(val)}
      placeholder={text}
    />
        </div>
    )
  }


export default withStreamlitConnection(Auto_keywords)