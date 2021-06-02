import React from "react"

const Menu = (props) => {

    const handleClick = (e) => {
        const text = e.target.value
        console.log(text)
        props.newImage(text)
    }

    return(
        <div>
            <h1>What vacation spot are you looking for?</h1>
            <form onClick={handleClick}>
                <input type="radio" name="img" value="first"/>Warm Beach Paradise
                <input type="radio" name="img" value="second"/>Adventurous Mountain Hiking
                <input type="radio" name="img" value="third"/>Serene Cabin Getaway
                <input type="radio" name="img" value="fourth"/>Relaxing Spa Day
            </form>
        </div>
    )
}

export default Menu;