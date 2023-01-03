import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Captions } from "./pages/Captions/Captions";
import { Home } from "./pages/Home/Home";
import { Grammar } from "./pages/Grammar/Grammar";
import { CoverLetter } from "./pages/CoverLetter/CoverLetter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/captions" element={<Captions />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
