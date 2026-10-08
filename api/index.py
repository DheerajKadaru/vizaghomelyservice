import os
import sys

# Add the backend directory to the Python path
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'backend'))

# Import the Flask app from backend/app.py
from app import app

# Vercel needs the app object to be named 'app'
