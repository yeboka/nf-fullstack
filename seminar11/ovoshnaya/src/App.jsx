import Footer from "./components/Footer";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "50px 1fr 50px",
        height: "100vh",
      }}
    >
      <Header />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
