def detect_phishing(url: str):

    suspicious_words = ["login", "verify", "update", "bank", "secure"]

    score = 0

    for word in suspicious_words:
        if word in url:
            score += 1

    if "https" not in url:
        score += 1

    if score >= 2:
        return {
            "url": url,
            "result": "Phishing Website",
            "risk_level": "High"
        }
    else:
        return {
            "url": url,
            "result": "Safe Website",
            "risk_level": "Low"
        }