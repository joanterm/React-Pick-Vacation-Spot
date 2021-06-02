import './App.css';
import React, {useState} from "react"
import Menu from "./Menu.js"
import Image from "./Image.js"
import Modal from "./Modal.js"

const images = {
  first: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80",
  second: "https://images.unsplash.com/photo-1597765770223-079e884e436b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  third: "https://images.unsplash.com/photo-1475087542963-13ab5e611954?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  fourth: "https://images.unsplash.com/photo-1613013546273-fdedae34436c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
}


const App = () => {

  const [image, setImage] = useState(images.first)
  const [isOpen, setIsOpen] = useState(false)

  // IMAGE PART
  const chooseImage = (newImgValue) => {
    const setNewImg = images[newImgValue]
    setImage(setNewImg)
  }

  // MODAL PART
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="main-section">
      <Menu newImage={chooseImage}/>
      <Image location={image} />

      <div>
        <button onClick={openModal}>Open</button>
        <Modal open={isOpen} close={closeModal} />
      </div>

    </div>
  );
}

export default App;
