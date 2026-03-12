# AI Cyber Defense Platform

## Overview
AI Cyber Defense Platform is a cybersecurity system that detects malware files and phishing websites using machine learning and web technologies.

The system provides a security dashboard, malware scanning, phishing detection, and a cybersecurity assistant chatbot.

## Features
- Malware File Scanner
- Phishing URL Detection
- Threat Intelligence Dashboard
- AI Cybersecurity Chatbot
- Security Analytics Visualization

## Technologies Used
Frontend:
- React.js

Backend:
- FastAPI (Python)

Machine Learning:
- Scikit-learn
- Random Forest Classifier

Visualization:
- Recharts

## Project Structure

AI-Cyber-Defense-Platform
│
├── Backend
│   ├── malware_scanner
│   ├── phishing_detector
│   └── main.py
│
├── Frontend
│   └── cyber-dashboard
│
└── ai_models
    └── malware_model.pkl

## How to Run the Project

### Backend

Install dependencies

pip install fastapi uvicorn scikit-learn pandas joblib

Run server

uvicorn main:app --reload

### Frontend

Navigate to frontend folder

cd Frontend/cyber-dashboard

Install packages

npm install

Start React app

npm start

## Future Improvements

- Real malware dataset training
- Network intrusion detection
- Real-time threat monitoring
- Advanced AI models

## Author
Ganesh
AIML Student
