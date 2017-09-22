import React from "react";
import { render } from "react-dom";
import { Input } from "./component/Input";
import { Result } from "./component/Result";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            inputLabel: "ENTER A COLOR",
            resultLabel: "SELECTED COLOR",
            initialColor: "#ffffff",
            initialFormat1: "color1",
            initialFormat2: "color2"
        }
    }

    newColor(color){
        this.setState({
           initialColor: color
        });
    }

    hexToRbg(color){

    }

    hexToShortHex(color){

    }

    hexToHsl(color){

    }

    rgbToHex(color){

    }

    rgbToShortHex(color){

    }

    rgbToHsl(color){

    }

    shortHexToRgb(color){

    }

    shortHexToHex(color){

    }

    shortHexToHsl(color){

    }

    hslToRgb(color){

    }

    hslToHex(color){

    }

    hslToShortHex(color){

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <Input
                            inputLabel={this.state.inputLabel}
                            initialColor={this.state.initialColor}
                            newColor={this.newColor.bind(this)}
                            hexToRgb={this.hexToRbg.bind(this)}
                            hexToShortHex={this.hexToShortHex.bind(this)}
                            hexToHsl={this.hexToHsl.bind(this)}
                            rgbToHex={this.rgbToHex.bind(this)}
                            rgbToShortHex={this.rgbToShortHex.bind(this)}
                            rgbToHsl={this.rgbToHsl.bind(this)}
                            shortHexToRgb={this.shortHexToRgb.bind(this)}
                            shortHexToHex={this.shortHexToHex.bind(this)}
                            shortHexToHsl={this.shortHexToHsl.bind(this)}
                            hslToRgb={this.hslToRgb.bind(this)}
                            hslToHex={this.hslToHex.bind(this)}
                            hslToShortHex={this.hslToShortHex.bind(this)}
                        />
                    </div>
                    <div className="col-md-4">
                        <Result
                            resultLabel={this.state.resultLabel}
                            initialColor={this.state.initialColor}
                            initialFormat1={this.state.initialFormat1}
                            initialFormat2={this.state.initialFormat2}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("app"));