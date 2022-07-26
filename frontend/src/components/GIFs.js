import React, { useEffect, useState } from "react"
import bike from "../gifs/bike.gif"
import breezy from "../gifs/breezy-night.gif"
import commute from "../gifs/commute.gif"
import creamer from "../gifs/creamer.gif"
import crescent from "../gifs/crescent-moon.gif"
import flowers from "../gifs/flowers.gif"
import mirror from "../gifs/mirror.gif"
import night from "../gifs/night -ide.gif"
import nightdrive from "../gifs/night-drive.gif"
import rose from "../gifs/rose.gif"
import shoe from "../gifs/shoe.gif"
import shoetwo from "../gifs/shoe2.gif"
import tea from "../gifs/tea.gif"
import nails from "../gifs/nails.gif"
import beach from "../gifs/beach.gif"
import coke from "../gifs/coke.gif"
import tie from "../gifs/tie.gif"
import typing from "../gifs/typing.gif"
import drink from "../gifs/drink.gif"

const GifsSlideShow = ({ imgs }) => {
  const [image, setImage] = useState(0)

  useEffect(() => {
    setImage(0)
  }, [])

  const nextImg = () => {
    if (image === imgs.length - 1) {
      setImage(0)
    } else {
      setImage(image + 1)
    }
  }

  const prevImg = () => {
    if (image === 0) {
      setImage(imgs.length - 1)
    } else {
      setImage(image - 1)
    }
  }

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[image]}></img>
      <div className="arrows">
        <button className="left-arrow" onClick={prevImg}>
          ◀
        </button>
        <button className="right-arrow" onClick={nextImg}>
          ▶
        </button>
      </div>
    </div>
  )
}

function GIFs(props) {
  return (
    <div>
      <GifsSlideShow
        imgs={[
          bike,
          breezy,
          commute,
          creamer,
          crescent,
          flowers,
          mirror,
          night,
          nightdrive,
          rose,
          shoe,
          shoetwo,
          tea,
          nails,
          beach,
          coke,
          tie,
          typing,
          drink,
        ]}
      />
    </div>
  )
}

export default GIFs
