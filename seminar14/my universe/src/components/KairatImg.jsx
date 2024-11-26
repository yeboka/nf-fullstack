import React from "react";
import Kairosh from "../assets/kairosh.jpg"

class Kairat extends React.Component {

    componentWillUnmount () {
        this.props.myUniverse.pause()
    }

    render() {
        return <div className="kaira">
            <img src={Kairosh} alt="kairat Nurtas" />
        </div>
    }
}


export default Kairat