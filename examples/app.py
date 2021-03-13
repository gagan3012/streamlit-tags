import streamlit as st
from streamlit_tags import st_tags


keywords = st_tags('Enter Keyword:', 'Press enter to add more', ['One', 'Two', 'Three'])

st.sidebar.markdown(keywords)
