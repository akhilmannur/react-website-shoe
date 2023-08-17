
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Singup from './Components/Singup';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import { mycontext } from './Context/Context';
import { shoesyproduct } from './Components/Productsdata';
import Men from './Components/Men';
import Women from './Components/Women';
import Cart from './Components/Cart';
import Viewmore from './Components/Viewmore';
import { Dummyuser } from './Components/Dummyuser';
import { UserContext } from './Context/ContextUser';
import Profile from './Components/Profile';
import Alertlogin from './Components/Alertlogin';
import Checkout from './Components/Checkout';
import Products from './Components/Products';
import AdminLogin from './Components/AdminLogin';
import AdminHome from './Components/AdminHome';
import { DummyAdmin } from './Components/DummyAdmin';
import AdminProducts from './Components/AdminProducts';
import AdminDelete from './Components/AdminDelete';
import AdminAddProduct from './Components/AdminAddProduct';
import AdminEdit from './Components/AdminEdit';
import AdminUserPRo from './Components/AdminUserPRo';
import AdminMen from './Components/AdminMen';
import AdminWomen from './Components/AdminWomen';
import AdminProductHead from './Components/AdminProductHead';


function App() {
const [product,setProduct]=useState(shoesyproduct )
const[cartt,setCartt]=useState([]);
const [userdata,setUserdata]=useState(Dummyuser);

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [search,setSearch] = useState('');
const[admindata]=useState(DummyAdmin)
const [loggedInUserId, setLoggedInUserId] = useState(null);
const [adminloggedin,setAdminLoggedIN]=useState(true);

const setUserContext = (userId) => {
  setLoggedInUserId(userId);
};

  
  return (
    <div className="App">
      <mycontext.Provider value={{product,cartt,setCartt,search,setSearch,setProduct,adminloggedin,setAdminLoggedIN}}>
        <UserContext.Provider value={{userdata,setUserdata,isLoggedIn,setIsLoggedIn, admindata, loggedInUserId, setUserContext }}>
  <Routes>
    <Route path="/"  element={<Home/>} />  
    <Route path="/login"  element={ <Login />} /> 
    <Route path="/signup"  element={ <Singup />} /> 
    <Route path="/men"  element={ <Men />} /> 
    <Route path="/women"  element={ <Women />} /> 
    <Route path="/cart"  element={ <Cart />} /> 
    <Route path="/Viewmore/:id"  element={ <Viewmore />} /> 
    <Route path="/profile"  element={ < Profile />} /> 
    <Route path="/alertlogins" element={<Alertlogin/> } />
    <Route path="/checkout" element={<Checkout/> } />
    <Route path="/products" element={<Products/> } />
    <Route path="/adminlogin" element={<AdminLogin/> } />
    <Route path="/adminhome" element={<AdminHome/> } />
    <Route path="/adminproduct" element={<AdminProducts/> } />
    <Route path="/admindelete" element={<AdminDelete /> } />
    <Route path="/adminedit/:id" element={< AdminEdit /> } />
    <Route path="/adminadd" element={< AdminAddProduct /> } />
    <Route path="/adminuserpro/:id" element={< AdminUserPRo/> } />
    <Route path="/adminmen" element={< AdminMen/> } />
    <Route path="/admiwonmen" element={< AdminWomen/> } />
    <Route path="/adminproducttab" element={< AdminProductHead/> } />
   
    
    
  </Routes>
  </UserContext.Provider>
</mycontext.Provider>


 
    </div>
  );
}

export default App;
