import os
import google.generativeai as genai
import functions_framework

# This decorator tells Google Cloud this is an HTTP-triggered function
@functions_framework.http
def hello_gemini_test(request):
    """
    A simple Cloud Function to test the Gemini API connection.
    """
    # Get the API Key from the cloud environment
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        return "ERROR: API key not configured.", 500
    
    genai.configure(api_key=api_key)
    # Using the model we decided on
    model = genai.GenerativeModel('gemini-1.5-pro-latest')

    # Ask a simple, hardcoded question
    try:
        response = model.generate_content("Why is the sky blue?")
        # Return the AI's text directly to the browser
        return response.text
    except Exception as e:
        return f"An error occurred: {str(e)}", 500