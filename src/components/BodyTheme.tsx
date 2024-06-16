"use client"

import React, { PropsWithChildren, useContext } from 'react'
import { ThemeContext } from '@/lib/ThemeProvider'

export default function BodyTheme({children}:PropsWithChildren) {
    const {theme} = useContext(ThemeContext)

  return (
    <main className={theme==="light" ? "bg-white color-black":"bg-black color-white"}>{children}</main>
  )
}
