import React from "react"
import { Link } from "gatsby"

function FruitInfo(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <div>{props.fruitName}</div>
            <img src={props.fruitPic} width="200px" alt="put your fruit picture in /static/img/fruits"/>
        </>
    )
}

export default function AboutPage() {
    return (
        <>
            <div>About page lmao, add ur fav fruits below by editing the code</div>
            <Link to="/">Back home</Link>
            {/* Add your fruits below! */}
            <FruitInfo name="Albert" fruitName="i love me some peaches!" fruitPic="/img/fruits/peaches.jpg"/>
            <FruitInfo name="Andrew" fruitName="mangos r good" fruitPic="/img/fruits/mangos.jpg"/>
            <FruitInfo name="Ryo" fruitName="durians are creamy" fruitPic="/img/fruits/Durian-Fruit.jpg"/>
            <FruitInfo name="Elisabeth" fruitName="blackberries are so yummy" fruitPic="/img/fruits/blackberries.jpg"/>
            <FruitInfo name="Cynthia" fruitName="juicy watermelons" fruitPic="/img/fruits/watermelon.jpg"/>
            <FruitInfo name="Davina" fruitName="banaenaes" fruitPic="/img/fruits/banana.jpeg" />
            <FruitInfo name="Michelle" fruitName="tangy tangerines hellohihihi" fruitPic="/img/fruits/tangerines.jpg" />

        </>
    )
}
