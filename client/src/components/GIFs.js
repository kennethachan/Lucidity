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
//imported GIFs to ease manipulation

const API =
  process.env.NODE_ENV == "production"
    ? "https://lucidity-productivity.herokuapp.com"
    : "http://localhost:3001"

// *Referenced a youtube video to learn how to create a slideshow*
const GifsSlideShow = ({ imgs }) => {
  const [GIFIndex, setGIFIndex] = useState(0)

  //Ensures that the index starts at 0
  useEffect(() => {
    setGIFIndex(0)
  }, [])

  //If image index is at the end of the array we set it back to the first
  //else we add 1 to the index, sliding to the next image
  const nextGIF = () => {
    if (GIFIndex === imgs.length - 1) {
      setGIFIndex(0)
    } else {
      setGIFIndex(GIFIndex + 1)
    }
  }

  //If image index is at the beginning of the array we subtract 1, sliding to the previous image
  //else subtract 1 to the index, sliding to the previous image.
  const prevGIF = () => {
    if (GIFIndex === 0) {
      setGIFIndex(imgs.length - 1)
    } else {
      setGIFIndex(GIFIndex - 1)
    }
  }

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[GIFIndex]}></img>
      <div className="arrows">
        <button className="left-arrow" onClick={prevGIF}>
          ◀
        </button>
        <button className="right-arrow" onClick={nextGIF}>
          ▶
        </button>
      </div>
    </div>
  )
}

//Site has hardcoded GIFs to choose from, Post MVP idea was to let the User add/delete additional GIFs
function GIFs(props) {
  const [URL, setURL] = useState("") //new GIF links will be set here
  const [addedImg, setAddedImg] = useState("") //When GIFs are remapped after adding a GIF, Data of that new GIF will be set here
  const [allImgs, setAllImgs] = useState([
    //hardcoded GIFs set here.  Hardcoded GIFs and new GIFs are concatenated here.
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

  //setAllImgs concatenates hardcoded GIFs and addedGIFs
  //URL input is reset afterwards to let the user add another GIF
  const getImages = async () => {
    const res = await axios.get(`${API}/get-image`)
    const imgURLs = res.data.images.map((img) => img.URL)
    setAllImgs([...allImgs, ...imgURLs])
    setAddedImg(res.data.images)
    setURL("")
  }

  //setAllImgs concatenates hardcoded GIFs and addedGIFs
  //New GIF is moved to the top of the array
  //GIFs are remapped
  const addImage = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${API}/new-image`, { URL }).then((res) => {
        setAllImgs([URL, ...allImgs])
        allImgs.unshift(URL)
        setURL("")
        getImages()
      })
    } catch (error) {
      alert("Please use a different GIF")
    }
  }

  //Added GIF will be removed starting from the top of the array
  //States are reset to allow the user to add a new GIF
  const deleteImage = async (_id) => {
    const res = await axios
      .delete(`${API}/delete-image/${_id}`)
      .then((res) => {
        allImgs.shift()
        allImgs.pop()
        setURL("")
        setAddedImg([])
        getImages()
      })
      .catch((error) => console.log(error))
  }

  //Form is used to submit and trigger add function, passing the input value
  //A button is used to trigger delete function, deleting the new GIF starting from the stop/most recently added GIF
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
