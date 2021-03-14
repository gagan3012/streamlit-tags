import streamlit as st
from streamlit_tags import st_tags


keywords = st_tags('Enter Keywords:', 'Press enter to add more', ['Zero', 'One', 'Two'])

st.write("### Results:")
st.write(keywords)

