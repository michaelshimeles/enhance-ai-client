import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { InstagramCaptions } from './pages/InstagramCaptions/InstagramCaptions';
import { FixGrammar } from './pages/FixGrammar/FixGrammar';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';
import { ProfileDashboard } from './pages/ProfileDashboard/ProfileDashboard';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { ResumeBuilder } from './pages/ResumeBuilder/ResumeBuilder';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/captions" element={<InstagramCaptions />} />
          <Route path="/grammar" element={<FixGrammar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/dashboard" element={<ProfileDashboard />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
