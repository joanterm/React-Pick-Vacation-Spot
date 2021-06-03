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
                <div className="radio-div">
                    <input type="radio" name="img" value="first"/>
                    <label>Warm Beach Paradise</label>
                </div>
            
                <div className="radio-div">
                    <input type="radio" name="img" value="second"/>
                    <label>Adventurous Mountain Hiking</label>
                </div>

                <div className="radio-div">
                    <input type="radio" name="img" value="third"/>
                    <label>Serene Cabin Getaway</label>
                </div>
                
                <div className="radio-div">
                    <input type="radio" name="img" value="fourth"/>
                    <label>Relaxing Spa Day</label>
                </div>
            </form>
        </div>
    )
}

export default Menu;