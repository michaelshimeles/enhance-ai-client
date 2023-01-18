import { useAuthState } from 'react-firebase-hooks/auth';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { auth } from './Firebase';
import { Account } from './pages/Account/Account';
import { FixGrammar } from './pages/FixGrammar/FixGrammar';
import { Home } from './pages/Home/Home';
import { InstagramCaptions } from './pages/InstagramCaptions/InstagramCaptions';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { ProfileDashboard } from './pages/ProfileDashboard/ProfileDashboard';
import { ResumeBuilder } from './pages/ResumeBuilder/ResumeBuilder';

const queryClient = new QueryClient();

function App() {
  const [user] = useAuthState(auth);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/account" />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/captions"
            element={
              <RequireAuth>
                <InstagramCaptions />
              </RequireAuth>
            }
          />
          <Route
            path="/grammar"
            element={
              <RequireAuth>
                <FixGrammar />{' '}
              </RequireAuth>
            }
          />
          <Route
            path="/resume"
            element={
              <RequireAuth>
                <ResumeBuilder />{' '}
              </RequireAuth>
            }
          />
          <Route path="/dashboard" element={<ProfileDashboard />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
