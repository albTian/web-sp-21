import React from "react"
import { Link } from "gatsby"



export default function Home() {
  return(
    <>
      <div>Hi web team! If you got here then nice :) </div>
      <h3>add your name and favorite fruit to the about page</h3>
      <Link to="/about">to about page</Link>
    </>
  ) 
}
