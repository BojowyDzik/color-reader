import React from "react";
import PropTypes from "prop-types";

export class Input extends React.Component {
    constructor(props) {
        super();
        this.state = {
            InpLabel: props.inputLabel,
            inputValue: '',
            invalidColorMessage: false,
        };

        this.config = {
            REGEX: {
                HEX: /^\#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2}) *$/,
                SHORT_HEX: /^\#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9]) *$/,
                RGB: /^rgb\((\d{1,3})\, {0,1}(\d{1,3})\, {0,1}(\d{1,3})\) *$/,
                HSL: /^hsl\((\d{1,3})\, {0,1}(\d{1,3})\%\, {0,1}(\d{1,3})\%\) *$/
            }
        }
    }

    colorCheck() {
        this.setState({
            invalidColorMessage: false
        });

        if (this.state.inputValue.match(this.config.REGEX.HEX)) {
            this.onHexColor(this.state.inputValue);
        } else if (this.state.inputValue.match(this.config.REGEX.SHORT_HEX)) {
            const shortToHex = this.state.inputValue.substring(1);
            const shortToHexColor = "#" + shortToHex[0] + shortToHex[0] + shortToHex[1] + shortToHex[1] + shortToHex[2] + shortToHex[2];
            this.onHexColor(shortToHexColor);
        } else if (this.state.inputValue.match(this.config.REGEX.RGB)) {
            this.onRgbColor(this.state.inputValue);
        } else if (this.state.inputValue.match(this.config.REGEX.HSL)) {
            this.onHslColor(this.state.inputValue);
        } else {
            this.setState({
                invalidColorMessage: true
            });
        }
    }

    onHexColor(color) {
        this.props.newColor(color);
        this.props.hexToRgb(color);
        this.props.hexToHsl(color);
    }

    onRgbColor(color){
        this.props.newColor(color);
        this.props.rgbToHex(color);
        this.props.rgbToHsl(color);
    }

    onHslColor(color){
        this.props.newColor(color);
        this.props.hslToRgb(color);
        this.props.hslToHex(color);
    }

    onHandleChange(event){
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        let errorCmp = "";

        if(this.state.invalidColorMessage) {
            errorCmp = (
                <div className="row">
                    <div className="col-md-12">
                        <h4 style={{color: "red"}}>Invalid color format!</h4>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="row pt-5">
                    <div className="col-md-12">
                        <h6>{this.state.InpLabel}</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-inline">
                            <input className="form-control mr-sm-2" type="text" value={this.state.inputValue} onChange={(event) => this.onHandleChange(event)}/>
                            <button onClick={this.colorCheck.bind(this)} className="btn btn-primary mr-sm-2">OK</button>
                        </div>
                    </div>
                </div>
                {errorCmp}
            </div>
        );
    }
}

Input.PropTypes = {
    newColor: PropTypes.func,
    hexToRgb: PropTypes.func,
    hexToHsl: PropTypes.func,
    rgbToHex: PropTypes.func,
    rgbToHsl: PropTypes.func,
    hslToRgb: PropTypes.func,
    hslToHex: PropTypes.func
};