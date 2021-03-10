import React from "react"
import { Link } from "gatsby"

function TeamInfo(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <div>{props.teamPosition}</div>
            <img src={props.teamPic} width="200px" alt=""/>
        </>
    )
}

export default function Team() {
    return (
        <>
            <div>reach's team page</div>
            <Link to="/">Home </Link>
            <Link to="/aboutreach">About </Link>
            <Link to="/announcements">Announcements </Link>
            <Link to="/programs">Programs </Link>
            <Link to="/team">Team </Link>
            <Link to="/media">Media </Link>
            <Link to="/blog">Blog </Link>
           
            <TeamInfo name="" teamPosition="" teamPic=""/>
            <TeamInfo name="" teamPosition="" teamPic=""/>
            <TeamInfo name="" teamPosition="" teamPic=""/>
            <TeamInfo name="" teamPosition="" teamPic=""/>
            <TeamInfo name="" teamPosition="" teamPic=""/>
            <TeamInfo name="" teamPosition="" teamPic="" />
            <TeamInfo name="" teamPosition="" teamPic="" />

        </>
    )
}
