import { Route, Routes, useLocation } from "react-router-dom";
import { Header, MainContent } from "./components";
import { AboutPage, ExplainPage, HomePage } from "./pages";
import { AnimatePresence } from "framer-motion";
import { FadeWrapper } from "./components/motion";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col h-screen bg-[#101323] overflow-x-hidden">
        <Header />
        <MainContent>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <FadeWrapper>
                    <HomePage />
                  </FadeWrapper>
                }
              />
              <Route
                path="/explain"
                element={
                  <FadeWrapper>
                    <ExplainPage />
                  </FadeWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <FadeWrapper>
                    <AboutPage />
                  </FadeWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </MainContent>
      </div>
    </>
  );
}

export default App;
