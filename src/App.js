import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import PrivateRoute from './authentication/PrivateRoute'
import Navbar from "./components/Navbar"
import About from './pages/About'
import Services from "./pages/Services"
import { publicRoute } from "./routes/publicRoutes"



function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    
      <Navbar>
       <Routes>
         {/* <Route path="/" element={<Home></Home>}></Route>
         <Route path="/about" element={<About></About>}></Route>
         <Route path="/services" element={<Services></Services>}></Route>
         <Route path="/contact" element={<Contact></Contact>}></Route>
         <Route path="/login" element={<Login></Login>}></Route> */}
         {
           publicRoute.map(({path,Component},index)=>(<Route key={index} path={path} element={<Component/>}/>))
         }
         
         <Route element={<PrivateRoute></PrivateRoute>}>
           <Route path='/services' element={<Services></Services>}></Route>
           <Route path='/about' element={<About></About>}></Route>
         </Route>
       </Routes>
      </Navbar>
    
  );
}

export default App;
