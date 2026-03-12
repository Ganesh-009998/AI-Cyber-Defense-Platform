import CyberChatbot from "./CyberChatbot";
import Dashboard from "./Dashboard";
import MalwareScanner from "./MalwareScanner";
import PhishingScanner from "./PhishingScanner";

function App() {
  return (
    <div>
      <Dashboard />
      <MalwareScanner />
      <PhishingScanner />
      <CyberChatbot />
    </div>
  );
}

export default App;