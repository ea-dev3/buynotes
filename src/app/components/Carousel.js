import React from "react"
import Carousel from "react-material-ui-carousel"
import AdsCard from "../components/AdsCard"

const ads = [
  {
    url: "../../images/about.svg",
    title: "Breakfast",
    width: "40%",
  },
  {
    url: "../../images//app.svg",
    title: "Burgers",
    width: "30%",
  },
  {
    url: "../../images/login.svg",
    title: "Camera",
    width: "30%",
  },
]

export default function Carousel() {
  return (
    <Carousel>
      {ads.map(ad => (
        <AdsCard />
      ))}
    </Carousel>
  )
}
