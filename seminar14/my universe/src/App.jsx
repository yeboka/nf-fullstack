import "./App.css";
import React from "react";
import Kairat from "./components/KairatImg";
import audio from "./assets/myUniverse.mp3";

const myUniverse = new Audio(audio);

// myUniverse.pause()

class App extends React.Component {
  state = {
    counter: 5,
    isLoading: false,
    isKairat: true,
    isPlayClicked: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        counter: 5,
      });
    }, 3000);
  }

  componentDidUpdate () {
    const { isKairat, isPlayClicked, isLoading } = this.state;

    console.log("loading", isLoading);

    if (isPlayClicked && isKairat) {
      myUniverse.play()
    } else {
      myUniverse.pause()
    }
  }

  render() {
    // myUniverse.play()

    const { isLoading, counter, isKairat, isPlayClicked } = this.state;

    return (
      <div className="app">
        {isLoading ? (
          <div>... загружаем</div>
        ) : (
          <div>
            {!isPlayClicked && (
              <button
                onClick={() => {
                 this.setState({isPlayClicked: true})
                 setInterval(() => {
                  this.setState({ isKairat: !this.state.isKairat });
                }, 3000);
                }}
              >
                PLAY
              </button>
            )}
            {isPlayClicked && isKairat && <Kairat myUniverse={myUniverse} />}
          </div>
        )}
      </div>
    );
  }
}

export default App;

// переписать App.jsx на классовый компонент.
// state counter => after 5 seconds     !5!
// до 5и секунд показать текст          ...загружаю
// componentDidMount

// find picture of Kairat
// 1 => каждые 3 сек показывать и убирать картинку Кайрош
// 2 => "вынести" картинку в отдельный компонент

//1 => когда кнопка play нажимается картинка появляется и включается музыка
//2 => музыка должна перестать играть кождый раз когда картинка исчезает
