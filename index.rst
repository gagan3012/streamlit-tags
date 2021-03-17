Streamlit-tags
==============

A custom component to have Tags in Streamlit. |image|

Please star the repo and share the usage if you liked it.

Try out a demo here: |Streamlit App|

Check out docs here:

Install
-------

::

    pip install streamlit-tags

The installation can also be found on
`**PyPi** <https://pypi.org/project/streamlit-tags/>`__

Usage
-----

This library has one main function to display and use tags:

-  ``st_tags`` to display the tags feature

Check the
```examples/`` <https://github.com/gagan3012/streamlit-tags/tree/master/examples>`__
folder of the project for a more through quick start.

Definition
----------

.. code:: python

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

We also have a function now to embed the tags function to the sidebar:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: python

    def st_tags_sidebar(label: str,
                        text: str,
                        value: list,
                        key=None) -> list:
        '''

        :param label: (Str) Label of the Function
        :param text: (Str) Instructions for entry
        :param value: (List) Initial Value
        :param key: (Str)
            An optional string to use as the unique key for the widget.
            Assign a key so the component is not remount every time the script is rerun.
        :return: Tags
        '''

Example Usage
-------------

.. code:: python

    import streamlit as st
    from streamlit_tags import st_tags

    keywords = st_tags('Enter Keyword:', 'Press enter to add more', ['One', 'Two', 'Three'])

    st.write(keywords)

UI for st\_tags
~~~~~~~~~~~~~~~

.. figure:: https://user-images.githubusercontent.com/49101362/111052896-56a83580-8470-11eb-9d70-6196757d9f85.png
   :alt: image

   image
UI for st\_tags\_sidebar
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: https://user-images.githubusercontent.com/49101362/111333712-fab5fa80-8683-11eb-95a1-311205ea9605.png
   :alt: image

   image

.. |image| image:: https://github.com/gagan3012/streamlit-tags/blob/master/img/streamlit-app-2021-03-14-03-03-7.gif
.. |Streamlit App| image:: https://static.streamlit.io/badges/streamlit_badge_black_white.svg
   :target: https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py
