import React from "react";
import { AuthProvider } from "./components/contexts/AuthContext";
import MainContent from "./components/MainContent";

const App: React.FC = () => (
  <div className="mt-2 flex flex-col items-center">
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  </div>
);

export default App;
