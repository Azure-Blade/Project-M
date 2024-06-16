"use client"

import React, { PropsWithChildren, createContext, useState } from 'react'

type Context = {
  theme: "dark" | "light",
  setTheme:(React.Dispatch<React.SetStateAction<"dark" | "light">>)| null
}

export const ThemeContext = createContext<Context>({theme: "dark", setTheme:null})
type Props = PropsWithChildren

export default function ThemeProvider({children}:Props) {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      <button onClick={()=>setTheme("light")}>set to light</button>
      <button onClick={()=>setTheme("dark")}>set to dark</button>
    </ThemeContext.Provider>
  )

}
