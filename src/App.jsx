import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import SettingsPage from './pages/SettingsPage';
import UploadPage from './pages/UploadPage';
import StatusPage from './pages/StatusPage';
import ToastContainer from './components/ToastContainer';
import { useToast } from './hooks/useToast';

function App() {
  const { toasts, removeToast, showSuccess, showError, showInfo } = useToast();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/settings" element={<SettingsPage toastActions={{ showSuccess, showError, showInfo }} />} />
          <Route path="/upload" element={<UploadPage toastActions={{ showSuccess, showError, showInfo }} />} />
          <Route path="/status" element={<StatusPage toastActions={{ showSuccess, showError, showInfo }} />} />
        </Routes>
      </Layout>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </Router>
  );
}

export default App;
