import streamlit as st
from streamlit_tags import st_tags, st_tags_sidebar

st.write("# Code for streamlit tags")

st.code(body='''keywords = st_tags(
    label='# Enter Keywords:',
    text='Press enter to add more',
    value=['Zero', 'One', 'Two'],
    suggestions=['five', 'six', 'seven', 'eight', 'nine', 'three', 'eleven', 'ten', 'four'],
    maxtags = 4
    key='1')''',
        language="python")

maxtags = st.slider('Number of tags allowed?', 3, 10, 1, key='1')

keywords = st_tags(
    label='# Enter Keywords:',
    text='Press enter to add more',
    value=['Zero', 'One', 'Two'],
    suggestions=['five', 'six', 'seven', 'eight', 'nine', 'three', 'eleven', 'ten', 'four'],
    maxtags=maxtags,
    key='1')

st.write("### Results:")
st.write(keywords)

st.sidebar.write("# Code for streamlit tags sidebar")

st.sidebar.code(body='''keyword = st_tags_sidebar(
label='# Enter Keywords:',
text='Press enter to add more',
value=['Zero', 'One', 'Two'],
suggestions=['five', 'six', 'seven', 
'eight', 'nine', 'three', 
'eleven', 'ten', 'four'],
maxtags = 4)''',
                language="python")

maxtags_sidebar = st.sidebar.slider('Number of tags allowed?', 3, 10, 1, key='2')


keyword = st_tags_sidebar(label='# Enter Keywords:',
                          text='Press enter to add more',
                          value=['Zero', 'One', 'Two'],
                          suggestions=['five', 'six', 'seven', 'eight', 'nine', 'three', 'eleven', 'ten', 'four'],
                          maxtags=maxtags_sidebar,
                          key='2')

st.sidebar.write("### Results:")
st.sidebar.write(keyword)
