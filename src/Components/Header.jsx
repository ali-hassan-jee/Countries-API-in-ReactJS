import { useState } from "react"

function Header () {
    const [isDark, setIsDark] = useState(false)
    return (
        <>
         <header>
        <div className="header-content">
            <h1 className="title">Where in the world? </h1>
            <p className="theme" onClick={()=>{
                isDark?setIsDark(false):setIsDark(true);
                document.body.classList.toggle('dark');
            }}> <i className={`fa-regular fa-${isDark?'sun':'moon'}`}></i>{' '}
                {`${isDark?'Light':'Dark'}`} Mode</p>
        </div>
    </header>
        </>
    )
}

export default Header
