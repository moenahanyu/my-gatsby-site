import React from "react"
import '../utils/global.css'
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
  <> {/* <React.Fragment>の省略形 */}
    <Header />
    {children}
    <Footer />
  </>
)