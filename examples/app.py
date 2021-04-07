import streamlit as st
from streamlit_tags import st_tags

with st.echo():
    st.write("# Code for streamlit tags")

    keywords = st_tags(label='# Enter Keywords:',
                       text='Press enter to add more',
                       value=['Zero', 'One', 'Two'],
                       suggestions=['five', 'six', 'seven', 'eight', 'nine', 'three', 'eleven', 'ten', 'four'])

st.write("### Results:")
st.write(keywords)
