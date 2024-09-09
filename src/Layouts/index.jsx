import React from "react"
import { Header } from "../Header"
import { HeaderBottom } from "../HeaderBottom"
import { Footer } from "../Footer"

export const Layouts = ({ childern }) => {
    return (
        <>
            <Header />
            <HeaderBottom />
            {
                childern
            }
            <Footer />
        </>
    )
}