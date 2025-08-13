import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import { Outlet } from "react-router-dom"
import "./App.css"
function App() {
  return (
<div>
  <Header />
  <Outlet />
  <Footer />
</div>
  )
}
export default App
