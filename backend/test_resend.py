import os
import resend
from dotenv import load_dotenv

load_dotenv()

resend.api_key = os.getenv("RESEND_API_KEY")

params: resend.Emails.SendParams = {
    "from": "CityConnect <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "CityConnect Email Test",
    "html": "<h2>Welcome to CityConnect!</h2><p>Resend integration is working.</p>"
}

try:
    email = resend.Emails.send(params)
    print("Email request successful!")
    print(email)
except Exception as error:
    print("Email request failed:")
    print(error)
