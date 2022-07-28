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
  const [addedImg, setAddedImg] = useState("")
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
    const imgURLs = res.data.images.map((img) => img.URL)
    setAllImgs([...allImgs, ...imgURLs])
    setAddedImg(res.data.images)
    setURL("")
  }

  const addImage = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${API}/new-image`, { URL }).then((res) => {
        setAllImgs([...allImgs, URL])
        setURL("")
        getImages()
      })
    } catch (error) {
      alert("Please use a different GIF")
    }
  }

  const deleteImage = async (_id) => {
    const res = await axios
      .delete(`${API}/delete-image/${_id}`)
      .then((res) => {
        setAddedImg([])
        allImgs.pop()
        setURL("")
        getImages()
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <GifsSlideShow imgs={allImgs} />
      <form className="GIF-form" onSubmit={(e) => addImage(e)}>
        <input
          className="url-address"
          type="text"
          value={URL}
          placeholder="  Paste GIF Image Address"
          onChange={(e) => setURL(e.target.value)}
        ></input>{" "}
        <br />
        <button className="addgif-btn" type="submit">
          add
        </button>
      </form>
      <button
        className="deletegif-btn"
        onClick={() => deleteImage(addedImg[0]._id)}
      >
        delete
      </button>
    </div>
  )
}

export default GIFs
