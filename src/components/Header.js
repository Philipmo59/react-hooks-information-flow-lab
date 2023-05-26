import React from "react"


function Header({onDarkModeClick,isDarkMode}){
    const mode = isDarkMode? "Dark":"Light"
    function handleClick(){
        onDarkModeClick()
    }

    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={handleClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
        </header>
        )
    
}

export default Header
