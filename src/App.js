import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./modules/Dashboard";
import Form from "./modules/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users/sign_in" element={<Form isSignInPage={true} />} />
      <Route path="/users/sign_up" element={<Form />} isSignInPage={false} />
    </Routes>
    // <div className="bg-[#e2eafa] h-screen flex justify-center items-center">
    //   {/* <Form /> */}
    //   <Dashboard />
    // </div>
  );
}

export default App;
