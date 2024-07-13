import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/Page";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Update from "./pages/Update";
function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} >
          <Route path="/add" element={<Tab1 />} />
          <Route path="/tab2" element={<Tab2 />}/>
          <Route path="/update/:id" element={<Update />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
