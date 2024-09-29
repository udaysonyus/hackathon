import streamlit as st
from PIL import Image
import openai
import re
import base64
from io import BytesIO
import requests

# Set your OpenAI API key
openai.api_key = st.secrets["api"]

# Set your assistant ID or fine-tuned model ID
assistant_id = st.secrets["assistant"]

# Function to convert image to base64
def image_to_base64(image):
    buffered = BytesIO()
    image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    return img_str

# Streamlit app starts here
st.set_page_config(layout="centered")

# Load the logo image from a URL
logo_url = "https://github.com/Lalith-Adithya/MediFriend-LOGO/blob/main/logo-transparent-png.png?raw=true"
response = requests.get(logo_url)
logo = Image.open(BytesIO(response.content))

# Convert image to base64 for embedding in HTML
logo_base64 = image_to_base64(logo)

# Set the title with logo on the left and tagline in smaller font
st.markdown(
    f"""
    <div style="display: flex; align-items: center;">
        <img src="data:image/png;base64,{logo_base64}" style="width: 100px; margin-right: 20px;margin-left: 140px;" alt="Logo">
        <div>
            <h1 style="margin: 0; display: inline;">MediFriend</h1>
            <h5 style="margin: 0; margin-left: 180px;">...a friend indeed</h5>
        </div>
    </div>
    """,
    unsafe_allow_html=True
)

# OpenAI chat initialization and other code...
client = openai.OpenAI(api_key=openai.api_key)

# Initialize chat history
if "chat_history" not in st.session_state:
    st.session_state.chat_history = []

# Helper function to get or create thread
def get_or_create_thread(client):
    if "GLOBAL_THREAD" not in st.session_state:
        st.session_state.GLOBAL_THREAD = client.beta.threads.create()
    return st.session_state.GLOBAL_THREAD

def printer(response):
    for word in response.split():
        for i in word:
            yield i 
            time.sleep(0.05)
        yield " "
        time.sleep(0.05)
# Helper function to handle the conversation
def chat_with_assistant(client, user_input):
    # Get or create the thread
    thread = get_or_create_thread(client)
    # Send user input to the thread
    client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=user_input,
    )

    # Create run for the assistant
    run = client.beta.threads.runs.create(thread_id=thread.id, assistant_id=assistant_id)
    
    while run.status not in ["completed", "failed", "requires_action"]:
        run = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)
    
    # Retrieve messages from the thread
    messages = client.beta.threads.messages.list(thread_id=thread.id)
    
    cleaned_messages = []
    for each in messages:
        # Cleaning the assistant's response text
        cleaned_text = re.sub(r"【\d+:\d+†[^】]+】", "", each.content[0].text.value)
        cleaned_messages.append(cleaned_text)
    
    return cleaned_messages

if "messages" not in st.session_state:
    st.session_state.messages = []
import time
# Add custom CSS for the chat input field
st.markdown("""
    <style>
    div.stTextInput > div > input {
        font-size: 35px;  /* Adjust font size */
        padding: 10px;    /* Adjust padding */
    }
    </style>
    """, unsafe_allow_html=True)

user_input = st.chat_input("🎙️ Say something")
if user_input:
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])
    st.session_state.messages.append({"role": "user", "content": user_input})

    with st.chat_message("user"):
        st.write(user_input)
    assistant_responses = chat_with_assistant(client, user_input)

    # Display assistant response in chat history
    if assistant_responses:
        st.session_state.messages.append({"role": "Medifriend", "content": assistant_responses[0]})

        with st.chat_message("Medifriend"):
            st.write(assistant_responses[0])