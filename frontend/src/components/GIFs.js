import React, { useEffect, useState } from "react"
import axios from "axios"
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
import cat from "../gifs/cat.gif"
import lips from "../gifs/lips.gif"
import coding from "../gifs/coding.gif"
import bebop from "../gifs/bebop.gif"
import stars from "../gifs/stars.gif"
import char from "../gifs/char.gif"

const url = "http://localhost:3001"

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
  const [URL, setURL] = useState("")
  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const res = await axios.get(`${url}/get-image`)
    console.log(res.data.images)
    console.log(URL)

    URL.map((imgs) => {
      console.log(imgs.URL)
      setURL(imgs.URL)
    })
  }

  const addImages = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${url}/new-image`, { URL }).then((res) => {
        console.log(res)
        getImages()
      })
    } catch (error) {
      alert("Please use a different GIF")
    }
  }

  return (
    <div>
      <GifsSlideShow
        imgs={[
          URL,
          coding,
          cat,
          lips,
          bebop,
          stars,
          char,
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
      <form onSubmit={(e) => addImages(e)}>
        <input
          type="text"
          placeholder="Paste GIF Image Address"
          // value={userImage}
          onChange={(e) => setURL(e.target.value)}
        ></input>
        <button type="submit">Add GIF</button>
      </form>
      <button>delete</button>
    </div>
  )
}

export default GIFs
