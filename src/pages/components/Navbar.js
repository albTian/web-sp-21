import React from "react";
import { Link } from "gatsby";
import components from 'src/pages/css/components/Navbar.scss';

export default function Navbar() {
	return (
		<div className="topnavRight">
			<a href="/">Home </a>
            <a href="/programs">events </a>
            <a href="/team">teams </a>
            <a href="/media">Media </a>
            <a href="/blog">blogs </a>
            <a href="/aboutreach">about us </a>
            <a href="/announcements">Announcements </a>
            <a href="/contact">contact us </a>
		</div>
	)
}

