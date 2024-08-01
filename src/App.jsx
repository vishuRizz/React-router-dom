import { React, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dash_board"));
import NavigateToRouts from "./components/NavigateToRouts";

function App() {
  return (
    <>
      <div>
        <h1>this is the top bar which does not changes</h1>
      </div>
      <BrowserRouter>
        <NavigateToRouts />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                {" "}
                <Landing />{" "}
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
