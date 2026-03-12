from phishing_detector.detector import detect_phishing
from fastapi import FastAPI, UploadFile, File
from malware_scanner.scanner import scan_file

threat_stats = {
    "total_scans": 0,
    "malware_detected": 0,
    "phishing_detected": 0
}

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI Cyber Defense Platform Running"}

@app.post("/scan-malware/")
async def scan_malware(file: UploadFile = File(...)):

    result = scan_file(file)

    threat_stats["total_scans"] += 1

    if result["status"] == "Malware Detected":
        threat_stats["malware_detected"] += 1

    return result
    
    result = scan_file(file)
    
    return result

@app.get("/detect-phishing/")
def phishing_scan(url: str):

    result = detect_phishing(url)

    threat_stats["total_scans"] += 1

    if result["result"] == "Phishing Website":
        threat_stats["phishing_detected"] += 1

    return result

@app.get("/threat-dashboard/")
def threat_dashboard():

    return threat_stats