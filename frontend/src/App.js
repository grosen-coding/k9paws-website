import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewReport from "./pages/NewReport";
import Reports from "./pages/Reports";
import Report from "./pages/Report";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new-report" element={<PrivateRoute />}>
              <Route path="/new-report" element={<NewReport />} />
            </Route>
            <Route path="/reports" element={<PrivateRoute />}>
              <Route path="/reports" element={<Reports />} />
            </Route>
            <Route path="/report/:reportId" element={<PrivateRoute />}>
              <Route path="/report/:reportId" element={<Report />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
