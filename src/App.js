import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Ocompany from "./pages/Ocompany";
import Category from "./pages/Category";
import Aktsiya from "./pages/Aktsiya";
import Uslugiya from "./pages/Uslugiya";
import Contact from "./pages/Contact";
import Qidirish from "./components/Qidirish";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Editor from "./pages/Editor";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // <div className="App" style={loginModal ? style : null}>
<div>
      <Navbar />



      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="oCompany" element={<Ocompany />} />
        <Route path="categoty" element={<Category />} />
        <Route path="aktsiya" element={<Aktsiya />} />
        <Route path="uslugiya" element={<Uslugiya />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="qidirish" element={<Qidirish />} />
        <Route path="profile" element={<Profile />} />
      
        <Route path="basket" element={<Basket />} />
        <Route path="editor" element={<Editor />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
