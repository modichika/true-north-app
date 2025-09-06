import os
import google.generativeai as genai
from dotenv import load_dotenv

# This is all now working perfectly.
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

# We create the model.
model = genai.GenerativeModel('gemini-2.5-pro')

print("--- Calling the Gemini API... ---")

try:
    # We send our question.
    response = model.generate_content("Why is the sky blue?")

    # This is the answer to your question.
    # We access the message inside the response object using ".text".
    message = response.text

    print("--- Success! Message received: ---")
    print(message)

except Exception as e:
    print("--- An error occurred ---")
    print(e)