import React from "react";


const SlotMachineHeader = () => {
    return (
        <header style={headerStyle}>

            <div style={headerWrapperStyle}>

                <h1>Slot Machine App</h1>

                <p style={headerParaStyle}>This is a test project given by AuraSide. Press 'Play' button to test how close you can get. I used reactjs and react-spring here</p>

            </div>
        </header>
    );
}


// style for header goes below

const headerStyle = {
    width: "100%",
    height: "auto",
    padding: "50px 0 20px 0",
    color: "rgb(17, 89, 89, 0.8)",
    lineHeight: "1.25"
}

const headerWrapperStyle = {
    width: "60%",
    margin: "0 auto",
    fontWeight: "600",
    letterSpacing: ".35px"
}

const headerParaStyle = {
    color: "#2E6B52",
    fontSize: "1.2rem",
    fontWeight: "400",
    marginTop: "20px"

}

export default SlotMachineHeader;