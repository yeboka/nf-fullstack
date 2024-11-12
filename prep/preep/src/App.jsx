import Showcase from "./components/Showcase"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div style={{display: "grid", gridTemplateRows: "50px 1fr 50px", height: "100vh"}}>
      <Header />
      <Showcase />
      <Footer />  
    </div>
  )
}

export default App
