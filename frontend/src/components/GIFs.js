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
import addBtn from "../buttons/add.png"
import deleteBtn from "../buttons/delete.png"

const API = "http://localhost:3001"

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
  const [allImgs, setAllImgs] = useState([
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
  ])

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const res = await axios.get(`${API}/get-image`)
    console.log(res.data.images)

    const imgURLs = res.data.images.map((img) => img.URL)

    setAllImgs([...allImgs, ...imgURLs])
  }

  const addImages = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${API}/new-image`, { URL }).then((res) => {
        setAllImgs([...allImgs, URL])
      })
    } catch (error) {
      alert("Please use a different GIF")
    }
  }

  // const deleteImages = async (_id) => {
  //   const res = await axios
  //     .delete(`${API}/delete-image/${_id}`)
  //     .then((_res) => getImages())
  //     .catch((error) => console.log(error))
  // }

  return (
    <div>
      <GifsSlideShow imgs={allImgs} />
      <form className="GIF-form" onSubmit={(e) => addImages(e)}>
        <input
          className="url-address"
          type="text"
          placeholder="  Paste GIF Image Address"
          onChange={(e) => setURL(e.target.value)}
        ></input>{" "}
        <br />
        <button className="addgif-btn" type="submit">
          add gif
        </button>
        <button className="deletegif-btn">delete</button>
      </form>
    </div>
  )
}

export default GIFs
