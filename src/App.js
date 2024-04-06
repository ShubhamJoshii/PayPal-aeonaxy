import { lazy, Suspense } from "react";
import Preloader from "./Components/Preloader";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
const Header = lazy(() => import("./Components/Header"));
const FrontPage = lazy(() => import("./Pages/FrontPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// <DemoComponent />
export default App;
