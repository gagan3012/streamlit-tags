import streamlit as st
from streamlit_tags import st_tags


keywords = st_tags(label='# Enter Keywords:',
                   text='Press enter to add more',
                   value=['Zero', 'One', 'Two'],
                   suggestions=['five','six'])

st.write("### Results:")
st.write(keywords)

