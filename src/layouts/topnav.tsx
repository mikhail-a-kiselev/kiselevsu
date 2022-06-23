import NextLink  from 'next/link'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useRouter } from 'next/router'
import * as texts from '../texts/navigation'

type TopNavItem = {
  link: any,
  text: String
};


function GetMenuItem(item: TopNavItem, key:any, route:any) {
  return  <li className="nav-item" key={key}>
    <NextLink  href={item.link} data-route="links">
      <a className={route == item.link ? "nav-link disabled" : "nav-link" }>{item.text}</a>
    </NextLink >
  </li>
}

function Topnav() {
  const links = [
    {"link":"/about", "text":texts.ABOUT},
//    {"link":"/portfolio", "text":texts.PORTFOLIO},
    {"link":"/contact", "text":texts.CONTACT},
  ];
  const route = useRouter().route;


  return <Navbar bg="light" expand="md" sticky="top">
      <Container>
        <NextLink href="/"><Navbar.Brand  className={route == "/" ? "nav-link disabled" : "nav-link" } href="./" data-route="home" title={texts.MIKHAIL_KISELEVS_PERSONAL_SITE}>{texts.MIKHAIL_KISELEV}</Navbar.Brand></NextLink>
        <Navbar.Toggle type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarDefault">
          <Nav className="navbar-nav mr-auto">
           {links.map((item:TopNavItem, key)=>{return GetMenuItem(item, key, route);})}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
}

export default Topnav;