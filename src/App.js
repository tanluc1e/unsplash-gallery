import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetImages from "./GetImages";
import Navbar from "./components/navbar/Navbar";
import Profile from "./Profile";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
          <Route path="/user/:username" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
