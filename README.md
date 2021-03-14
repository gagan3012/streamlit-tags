# Streamlit-tags

A custom component to have Tags in Streamlit.
![image](https://github.com/gagan3012/streamlit-tags/blob/master/img/streamlit-app-2021-03-14-03-03-7.gif)

## Install

```
pip install streamlit-tags
```

The installation can also be found on [**PyPi**](https://pypi.org/project/streamlit-tags/)

## Usage

This library has one main function to display and use tags:

- `st_tags` to display the tags feature

Check the [`examples/`](https://github.com/gagan3012/streamlit-tags/tree/master/examples) folder of the project for a more through quick start.

## Definition

```python
def st_tags(label: str,
            text: str,
            value: list,
            key=None) -> list
  '''

    :param label: (Str) Label of the Function
    :param text: (Str) Instructions for entry
    :param value: (List) Initial Value
    :param key: (Str)
        An optional string to use as the unique key for the widget.
        Assign a key so the component is not remount every time the script is rerun.
    :return: (List) Tags
    '''
```

## Example Usage

```python 
import streamlit as st
from streamlit_tags import st_tags

keywords = st_tags('Enter Keyword:', 'Press enter to add more', ['One', 'Two', 'Three'])

st.write(keywords)
```

![image](https://user-images.githubusercontent.com/49101362/111052896-56a83580-8470-11eb-9d70-6196757d9f85.png)
