import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./modules/Dashboard";
import Form from "./modules/Form";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null;
  if (!isLoggedIn && window.location.pathname === "/")
    return <Navigate to={`/users/sign_in`} />;
  else if (
    isLoggedIn &&
    ["/users/sign_in", "/users/sign_up"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/sign_in"
        element={
          <ProtectedRoute>
            <Form isSignInPage={true} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/sign_up"
        element={
          <ProtectedRoute>
            <Form isSignInPage={false} />
          </ProtectedRoute>
        }
      />
    </Routes>
    // <div className="bg-[#e2eafa] h-screen flex justify-center items-center">
    //   {/* <Form /> */}
    //   <Dashboard />
    // </div>
  );
}

export default App;
