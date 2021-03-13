import React,{ useEffect, useState }  from "react"
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
      <p>{JSON.stringify(value)}</p>
    </div>
  )
}




/*
const InputReplacement = React.forwardRef(
  ({tags, removeTag, ...restProps}: any, ref) => {
    const [css] = useStyletron();
    return (
      <div
        className={css({
          flex: '1 1 0%',
          flexWrap: 'wrap',
          display: 'flex',
          alignItems: 'center',
        })}
      >
        {tags.map((tag: string, index: number) => (
          <Tag
            variant={TAG_VARIANT.solid}
            onActionClick={() => removeTag(tag)}
            key={index}
          >
            {tag}
          </Tag>
        ))}
        <StyledInput ref={ref} {...restProps} />
      </div>
    );
  },
);

function Custom_keywords(props: ComponentProps) {
  const { label, text, initialValue }: PythonArgs = props.args
  const [value, setValue] = React.useState('');
  const [tags, setTags] = React.useState(initialValue);
  const addTag = (tag: string) => {
    setTags([...tags, tag]);
  };
  const removeTag = (tag: string) => {
    setTags(tags.filter((t: string) => t !== tag));
  };
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    switch (event.key) {
      // Enter
      case "Enter": {
        if (!value) return;
        addTag(value);
        setValue('');
        return;
      }
      // Backspace
      case "Backspace": {
        if (value || !tags.length) return;
        removeTag(tags[tags.length - 1]);
        return;
      }
    }
  };
  Streamlit.setComponentValue(value)
  return (
      <div>
      <h3>{label}</h3>
      <Input
      placeholder={tags.length ? '' : text}
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
      overrides={{
        Input: {
          style: {width: 'auto', flexGrow: 1},
          component: InputReplacement,
          props: {
            tags: tags,
            removeTag: removeTag,
            onKeyDown: handleKeyDown,
          },
        },
      }}
      />
      </div>
  );
}

 */


export default withStreamlitConnection(Custom_keywords)