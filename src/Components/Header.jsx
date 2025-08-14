import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext";

function Header () {
    const {isDark,setIsDark}=useContext(ThemeContext)
    
    
    return (
        <>
         <header className={isDark?'dark':''}>
        <div className="header-content">
            <h1 className="title">Where in the world? </h1>
            <p className="theme" onClick={()=>{
                setIsDark(prev => !prev);
                localStorage.setItem('isDark', JSON.stringify(isDark));
                
            }}> <i className={`fa-regular fa-${isDark?'sun':'moon'}`}></i>{' '}
                {`${isDark?'Light':'Dark'}`} Mode </p>
                
        </div>
    </header>
        </>
    )
}

export default Header

//AI version--------------------------------------------------
// import { useContext } from "react";
// import ThemeContext from "../contexts/ThemeContext";

// function Header() {
//   const { isDark, toggleTheme } = useContext(ThemeContext);

//   return (
//     <header className={isDark ? 'dark' : ''}>
//       <div className="header-content">
//         <h1 className="title">Where in the world?</h1>
//         <p className="theme" onClick={toggleTheme}>
//           <i className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`}></i>
//           {isDark ? 'Light' : 'Dark'} Mode
//         </p>
//       </div>
//     </header>
//   );
// }
// export default Header
