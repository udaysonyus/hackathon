# MediFriend Chat Application

This repository contains a Streamlit-based web application that allows users to interact with a chatbot called "MediFriend", which is powered by OpenAI's API. The application also includes some UI customizations such as embedding logos and styling the input fields.

## Features
- Streamlit-based user interface
- Integration with OpenAI API for chatbot functionality
- Custom branding with a logo displayed alongside the application title
- Fine-tuned OpenAI model for conversations
- Chat history is maintained using Streamlit's session state
- User inputs are displayed along with the chatbot's responses in a chat interface

## Setup Instructions

### Prerequisites
- Python 3.x
- Streamlit (pip install streamlit)
- OpenAI (pip install openai)
- Pillow (pip install pillow)
- Requests (pip install requests)

### Installation Steps
1. Clone this repository:
    bash
    git clone https://github.com/hackathon/medifriend-chat-app.git 
    cd medifriend-chat-app
    

2. Install the required dependencies:
    bash
    pip install -r requirements.txt
    

3. Set up your environment variables:
    - OpenAI API key (api)
    - Fine-tuned assistant ID (assistant)

   You can set these in your Streamlit secrets or using environment variables. Here's an example of how to add them in Streamlit secrets:

## Customization
- You can replace the logo_url with your own logo image.
- Modify the model ID and the prompts as per your own needs.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Happy coding!
