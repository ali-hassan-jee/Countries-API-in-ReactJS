import { useState,useEffect } from "react"
import ThemeContext from "./ThemeContext"
function ThemeContextProvider ({children}) {
    
    //  let savedTheme = localStorage.getItem('isDark');
    //   if (savedTheme === null) {
    //     localStorage.setItem('isDark', JSON.stringify(false));
    //     savedTheme=localStorage.getItem('isDark');
    //   }
    // const [isDark,setIsDark]=useState(JSON.parse(savedTheme))
    // console.log("lll",isDark);
    
     const [isDark, setIsDark] = useState(() => {
    // Initialize from localStorage safely (client-side only)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('isDark');
      return savedTheme !== null ? JSON.parse(savedTheme) : false;
    }
    return false; // Default for SSR
    });
    // Sync state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);
    return (
        <ThemeContext.Provider value={{isDark,setIsDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider

//------------------------------------------------------------
// AI version
// import { useState, useMemo, useCallback } from "react";
// import ThemeContext from "./ThemeContext";

// function ThemeContextProvider({ children }) {
//   const [isDark, setIsDark] = useState(false);

//   // Memoize the toggle function
//   const toggleTheme = useCallback(() => {
//     setIsDark(prev => !prev);
//   }, []);

//   // Memoize the context value
//   const contextValue = useMemo(() => ({
//     isDark,
//     toggleTheme
//   }), [isDark, toggleTheme]);

//   return (
//     <ThemeContext.Provider value={contextValue}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export default ThemeContextProvider;