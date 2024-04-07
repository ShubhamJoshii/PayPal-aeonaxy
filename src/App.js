import { lazy, Suspense } from "react";
import Preloader from "./Components/Preloader";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import "./App.css";
const Header = lazy(() => import("./Components/Header"));
const FrontPage = lazy(() => import("./Pages/FrontPage"));
const PageNotFound = lazy(()=> import("./Pages/PageNotFound"));
function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// <DemoComponent />
export default App;
