from fastapi import FastAPI
import os
import resend
from dotenv import load_dotenv
load_dotenv()

resend.api_key = os.getenv("RESEND_API_KEY")
app = FastAPI(
    title="CityConnect API",
    description="Backend services for CityConnect",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to CityConnect API!",
        "status": "running"
    }