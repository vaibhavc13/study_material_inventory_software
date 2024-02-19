
import Course from "./pages/Course";
import Home from "./pages/Home";
import Queries from "./pages/Queries";
import Blogs from "./pages/blogs";
import Materials from "./pages/materials";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (<BrowserRouter>
      <Routes>
       <Route path="/study_material_inventory_software" element={<Home />}/>
       <Route index element={<Home />} />
       <Route path="/study_material_inventory_software/blogs" element={<Blogs />} />
          <Route path="/study_material_inventory_software/Course" element={<Course />} />
          <Route path="/study_material_inventory_software/Queries" element={<Queries />} />
       <Route path="/study_material_inventory_software/materials" element={<Materials />} >
        {/*   <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>)
  
}

export default App;
