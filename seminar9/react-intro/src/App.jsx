import BgImg from './images/pattern-background-desktop.svg'
import {Card, Other} from './components/Card'


const App = () => {
  return (
    <>
      <div style={{
        backgroundImage: `url(${BgImg})`,
        backgroundColor: "#D6E1f1",
        backgroundRepeat: 'repeat-x',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Arial', sans-serif"
      }}>
        <Card />
        <Other />
      </div> 
    </>
  )
}

export default App