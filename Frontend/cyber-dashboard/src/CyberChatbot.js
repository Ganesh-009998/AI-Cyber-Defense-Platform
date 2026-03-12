import { useState } from "react";

function CyberChatbot() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askBot = () => {

    let response = "";

    if(question.toLowerCase().includes("phishing"))
      response = "Phishing is a cyber attack where attackers trick users into giving sensitive information.";

    else if(question.toLowerCase().includes("malware"))
      response = "Malware is malicious software designed to damage or steal data from systems.";

    else if(question.toLowerCase().includes("security"))
      response = "Use strong passwords, antivirus software, and avoid suspicious links.";

    else
      response = "I am your AI Cybersecurity assistant. Ask me about malware, phishing, or security.";

    setAnswer(response);
  };

  return (
    <div style={{padding:"40px"}}>

      <h2>AI Cybersecurity Assistant</h2>

      <input
        type="text"
        placeholder="Ask cybersecurity question..."
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
      />

      <br/><br/>

      <button onClick={askBot}>Ask</button>

      <br/><br/>

      <p>{answer}</p>

    </div>
  );
}

export default CyberChatbot;