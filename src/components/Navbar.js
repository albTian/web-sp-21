import React from "react"
import { Link } from "gatsby"
import "../css/components/Navbar.scss"

export default function Navbar() {
	return (
		<>
			<Link to="/">Home </Link>
            <Link to="/aboutreach">About </Link>
            <Link to="/announcements">Announcements </Link>
            <Link to="/programs">Programs </Link>
            <Link to="/team">Team </Link>
            <Link to="/media">Media </Link>
            <Link to="/blog">Blog </Link>
		</>
	)
}

