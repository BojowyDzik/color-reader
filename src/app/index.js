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
            initialFormat1: "",
            initialFormat2: ""
        }
    }

    newColor(color){
        this.setState({
           initialColor: color
        });
    }

    hexToRgb(color){
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        let r = parseInt(result[1], 16).toString();
        let g = parseInt(result[2], 16).toString();
        let b = parseInt(result[3], 16).toString();
        this.setState({
            initialFormat1: "rgb(" + r + ", " + g + ", " + b + ")"
        });
    }

    hexToHsl(color){
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        let r = parseInt(result[1], 16).toString();
        let g = parseInt(result[2], 16).toString();
        let b = parseInt(result[3], 16).toString();

        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if(max == min){
            h = s = 0; // achromatic
        }else{
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        let hexColor = "hsl(" + Math.round(h*360) + "," + Math.round(s*100) + "%," + Math.round(l*100) + "%)";

        this.setState({
            initialFormat2: hexColor
        })

    }

    rgbToHex(color){
        let s = color.replace(/[^,\d]/g, "");
        let myString = s.split(",");
        let hex1 = parseInt(myString[0]).toString(16);
        let hex2 = parseInt(myString[1]).toString(16);
        let hex3 = parseInt(myString[2]).toString(16);

        if(hex1.length == 1) {
            hex1 = "0"+hex1
        }
        if(hex2.length == 1) {
            hex2 = "0"+hex2
        }
        if(hex3.length == 1) {
            hex3 = "0"+hex3
        }

        this.setState({
            initialFormat1: "#" + hex1 + hex2 + hex3
        });
    }

    rgbToHsl(color){
        let string = color.replace(/[^,\d]/g, "");
        let myString = string.split(",");

        let r = parseInt(myString[0]);
        let g = parseInt(myString[1]);
        let b = parseInt(myString[2]);

        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if(max == min){
            h = s = 0; // achromatic
        }else{
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        let hslColor = "hsl(" + Math.round(h*360) + "," + Math.round(s*100) + "%," + Math.round(l*100) + "%)";
        this.setState({
            initialFormat2: hslColor
        });
    }

    hslToRgb(color){
        let string = color.replace(/[^,\d]/g, "");
        let myString = string.split(",");

        let h = parseInt(myString[0]) / 360;
        let s = parseInt(myString[1]) / 100;
        let l = parseInt(myString[2]) / 100;

        let r, g, b;

        if(s == 0){
            r = g = b = l; // achromatic
        }else{
            let hue2rgb = function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };

            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        let rgbColor = "rgb(" + Math.round(r * 255) + "," + Math.round(g * 255) + "," +  Math.round(b * 255) + ")";
        this.setState({
           initialFormat1: rgbColor
        });
    }

    hslToHex(color){
        let string = color.replace(/[^,\d]/g, "");
        let myString = string.split(",");

        let h = parseInt(myString[0]) / 360;
        let s = parseInt(myString[1]) / 100;
        let l = parseInt(myString[2]) / 100;

        let r, g, b;
        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        const toHex = x => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        let hexColor = "#" + toHex(r) + toHex(g) + toHex(b);

        this.setState({
           initialFormat2: hexColor
        });
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
                            hexToRgb={this.hexToRgb.bind(this)}
                            hexToHsl={this.hexToHsl.bind(this)}
                            rgbToHex={this.rgbToHex.bind(this)}
                            rgbToHsl={this.rgbToHsl.bind(this)}
                            hslToRgb={this.hslToRgb.bind(this)}
                            hslToHex={this.hslToHex.bind(this)}
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