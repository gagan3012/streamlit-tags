# Streamlit-tags

A custom component to have Tags in Streamlit.
![image](https://github.com/gagan3012/streamlit-tags/blob/master/img/streamlit-app-2021-03-14-03-03-7.gif)

Please star the repo and share the usage if you liked it. 

Try out a demo here: [![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py)

Check out docs here: 

## Updates

Now streamlit tags also supports theming and all the colours 

![image](https://user-images.githubusercontent.com/49101362/113494082-df554700-94ed-11eb-8c0a-bbbec64ee4c2.png)


## Install

```
pip install streamlit-tags
```

The installation can also be found on [**PyPi**](https://pypi.org/project/streamlit-tags/) 

## Usage

This library has two main functions to display and use tags:

- `st_tags` to display the tags feature
- `st_tags_sidebar` to display the tags in the sidebar

Check the [`examples/`](https://github.com/gagan3012/streamlit-tags/tree/master/examples) folder of the project a quick start.

Check out demo here: https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py

## Definition

```python
def st_tags(label: str,
            text: str,
            value: list,
            suggestions: list = [],
            key=None) -> list:
    '''

    :param suggestions: (List) List of possible suggestions
    :param label: (Str) Label of the Function
    :param text: (Str) Instructions for entry
    :param value: (List) Initial Value
    :param key: (Str)
        An optional string to use as the unique key for the widget.
        Assign a key so the component is not remount every time the script is rerun.
    :return: (List) Tags
    
    '''
```

### We also have a function now to embed the tags function to the sidebar:

```python 
def st_tags_sidebar(label: str,
                    text: str,
                    value: list,
                    suggestions: list = [],
                    key=None) -> list:
    '''

    :param suggestions: (List) List of possible suggestions
    :param label: (Str) Label of the Function
    :param text: (Str) Instructions for entry
    :param value: (List) Initial Value
    :param key: (Str)
        An optional string to use as the unique key for the widget.
        Assign a key so the component is not remount every time the script is rerun.
    :return: Tags
    '''
```

## Example Usage

```python 
keywords = st_tags(label='# Enter Keywords:',
                   text='Press enter to add more',
                   value=['Zero', 'One', 'Two'],
                   suggestions=['five', 'six', 'seven', 'eight', 'nine', 'three', 'eleven', 'ten', 'four'],
                   key='1')
                   
keyword = st_tags_sidebar(label='# Enter Keywords:',
                          text='Press enter to add more',
                          value=['Zero', 'One', 'Two'],
                          suggestions=['five', 'six', 'seven', 'eight', 'nine', 'three', 'eleven', 'ten', 'four'])
```

