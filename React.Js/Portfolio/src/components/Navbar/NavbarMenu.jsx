import "./NavbarMenu.css";
import { useRef } from 'react'
import { Link} from "react-router-dom";
import Logo from "../../Images/code2go_cercle.png";
import { FaBars, FaTimes } from "react-icons/fa";


const NavbarMenu = () => {

  const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
		<header>
			
				<img src={Logo} alt="logo" className="rounded-circle logo"/>
			
			<nav ref={navRef}>
				<Link href="/#" className="navLink">Home</Link>
				<Link href="/#" className="navLink">Tools</Link>
				<Link href="/#" className="navLink">Contact me</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavbarMenu;