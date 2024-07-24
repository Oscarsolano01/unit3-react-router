import { Link } from "react-router-dom";

function NavBar() {
  return (
  
   
   <div id="navbar">
   <Link to="/blue">Blue </Link>
   <Link to="/red">Red </Link>
   <Link to ="/">Home </Link>
 </div>
   
  )
}

export default NavBar