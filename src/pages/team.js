import React from "react"
import { Link } from "gatsby"
import Navbar from "./components/Navbar"


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
            <Navbar> </Navbar>
            <div>Our Team</div>

           
            <TeamInfo name="Johnny Appleseed" teamPosition="President" teamPic="img/fruits/banana.jpeg"/>
            <TeamInfo name="Johnny Appleseed" teamPosition="President" teamPic="img/fruits/banana.jpeg"/>
            <TeamInfo name="Johnny Appleseed" teamPosition="President" teamPic="img/fruits/banana.jpeg"/>
            <TeamInfo name="Johnny Appleseed" teamPosition="President" teamPic="img/fruits/banana.jpeg"/>
            <TeamInfo name="Johnny Appleseed" teamPosition="President" teamPic="img/fruits/banana.jpeg"/>
            <TeamInfo name="Johnny Appleseed" teamPosition="President" teamPic="img/fruits/banana.jpeg" />
            <TeamInfo name="Johnny Appleseed" teamPosition="President" teamPic="img/fruits/banana.jpeg" />

        </>
    )
}
