import Link from 'next/link'
type TopNavItem = {
  link: String,
  text: String,
};

function TopMenuItem(item: TopNavItem, key) {
  return  <li className="nav-item link-element link-route-contact" key={key}>
    <Link href={item.link} data-route="links">
      <a className="nav-link">{item.text}</a>
    </Link>
  </li>
}

function Topnav() {
  const links = [
    {"link":"/about", "text":"About me"},
    {"link":"/portfolio", "text":"Portfolio"},
    {"link":"/contact", "text":"Contact"},
  ];
  return <nav className="navbar navbar-expand-md sticky-top navbar-light bg-ligh">
      <div className="container">
        <Link href="/"><a className="navbar-brand" href="./" data-route="home" title="Персональный сайт Михаила Киселева">Михаил Киселев</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarDefault">
          <ul className="navbar-nav mr-auto">
           {links.map((item:TopNavItem, key)=>{return TopMenuItem(item, key);})}
          </ul>
        </div>
      </div>
    </nav>
}

export default Topnav;