# Streamlit-tags

A custom component to have Tags in Streamlit.

## Install

```
pip install streamlit-tags
```

## Usage

This library has one main function to display and use tags:

- `st_tags` to display the tags feature

Check the [`examples/`](https://github.com/gagan3012/streamlit-tags/tree/master/examples) folder of the project for a more thourough quick start.

## Definition

```python
def st_tags(label: str,
            text: str,
            value: list,
            key=None) -> list
```

## Example Usage

```python 
import streamlit as st
from streamlit_tags import st_tags

keywords = st_tags('Enter Keyword:', 'Press enter to add more', ['One', 'Two', 'Three'])

st.write(keywords)
```

![image](https://user-images.githubusercontent.com/49101362/111052896-56a83580-8470-11eb-9d70-6196757d9f85.png)
