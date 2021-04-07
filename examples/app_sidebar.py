import streamlit as st
from streamlit_tags import st_tags_sidebar


keywords = st_tags_sidebar('Enter Keywords:', 'Press enter', ['Zero', 'One', 'Two'])

st.write("### Results:")
st.write(keywords)

