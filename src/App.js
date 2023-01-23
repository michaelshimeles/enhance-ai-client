import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Account } from './pages/Account/Account';
import { FixGrammar } from './pages/FixGrammar/FixGrammar';
import { Home } from './pages/Home/Home';
import { InstagramCaptions } from './pages/InstagramCaptions/InstagramCaptions';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { ProfileDashboard } from './pages/ProfileDashboard/ProfileDashboard';
import { ResetPassword } from './pages/ResetPassword/ResetPassword';
import { ResumeBuilder } from './pages/ResumeBuilder/ResumeBuilder';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/captions" element={<InstagramCaptions />} />
          <Route path="/grammar" element={<FixGrammar />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/dashboard" element={<ProfileDashboard />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
