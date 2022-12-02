import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Banner() {
 return (
   <>
     <Navbar bg="dark" variant="dark">
       <Container>
         <Navbar.Brand>Bandas musicales</Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default Banner;