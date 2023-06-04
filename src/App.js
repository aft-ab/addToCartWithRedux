
import { Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Home from './home/Home'
import ViewProduct from './home/viewProduct';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { useSelector ,} from 'react-redux';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';







const App = () => {
  const getState = useSelector((state) => state);
  const navigate =useNavigate();

  
  return (
    <>

    <Navbar bg="dark" expand="lg" variant="dark">

        <Container>
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          {/* <Navbar.Brand href="/">OSM</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"><h3>Home</h3></Nav.Link>
              <div className="4">
                <Link to ="/viewProducts">
                <Badge badgeContent={getState.length} color="primary">
                <ShoppingCartIcon fontSize='large' color="success"/>                
                </Badge>
                </Link>
              </div>
           
              
       
              
         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

 
{/* 
             <div className="h4" ><Link to ="/viewProducts">
                <Badge badgeContent={getState.length} color="primary">
                <ShoppingCartIcon fontSize='large' color="success"/>                
                </Badge>
                </Link>
           </div>  */}

      
 
     


      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/viewProducts" element={<ViewProduct />} />
        
      </Routes>

    </>

  );
}

export default App;



// <Navbar bg="dark" expand="lg" variant="dark" padding-right="100px">
// <Container>
//   {/* <div class="spinner-grow text-light" role="status">
//     <span class="visually-hidden">Loading...</span>
//   </div> */}
//   <Navbar.Brand href="/">OSM</Navbar.Brand>
  

//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="me-auto">
//       {/* <Nav.Link href="/">Home</Nav.Link> */}
         
//   <Nav.Link link to ="/viewProducts">ViewProduct</Nav.Link>
//      </Nav>
//   </Navbar.Collapse>
// </Container>


// </Navbar>
