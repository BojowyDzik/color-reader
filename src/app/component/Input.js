import React from "react";

import PropTypes from "prop-types";

export class Input extends React.Component {
    constructor(props) {
        super();
        this.state ={
            InpLabel: props.inputLabel,
            inputValue: '',
            invalidColorMessage: false,
            REGEX: {
                HEX: /^\#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2}) *$/,
                SHORT_HEX: /^\#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9]) *$/,
                RGB: /^rgb\((\d{1,3})\, {0,1}(\d{1,3})\, {0,1}(\d{1,3})\) *$/,
                HSL: /^hsl\((\d{1,3})\, {0,1}(\d{1,3})\%\, {0,1}(\d{1,3})\%\) *$/
            }
        }
    }

    colorCheck() {
        if(this.state.inputValue.match(this.state.REGEX.HEX)) {
            this.setState({
                invalidColorMessage: false
            });
            this.onHexColor(this.state.inputValue);
            console.log(true);
        }else if(this.state.inputValue.match(this.state.REGEX.SHORT_HEX)){
            this.setState({
                invalidColorMessage: false
            });
            this.onShortHexColor(this.state.inputValue);
            console.log(true);
        }else if(this.state.inputValue.match(this.state.REGEX.RGB)){
            this.setState({
                invalidColorMessage: false
            });
            this.onRgbColor(this.state.inputValue);
            console.log(true);
        }else if(this.state.inputValue.match(this.state.REGEX.HSL)){
            this.setState({
                invalidColorMessage: false
            });
            this.onHslColor(this.state.inputValue);
            console.log(true);
        }else {
            this.setState({
                invalidColorMessage: true
            });
        }
    }

    onHexColor(color) {
        this.props.newColor(color);
        this.props.hexToRbg(color);
        this.props.hexToShortHex(color);
        this.props.hexToHsl(color);
    }

    onShortHexColor(color){
        this.props.newColor(color);
        this.props.shortHexToRgb(color);
        this.props.shortHexToHex(color);
        this.props.shortHexToHsl(color);
    }

    onRgbColor(color){
        this.props.newColor(color);
        this.props.rgbToHex(color);
        this.props.rgbToShortHex(color);
        this.props.rgbToHsl(color);
    }

    onHslColor(color){
        this.props.newColor(color);
        this.props.hslToRgb(color);
        this.props.hslToHex(color);
        this.props.hslToShortHex(color);
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
                        <h3 style={{color: "red"}}>Invalid color format!</h3>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        {this.state.InpLabel}
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
    hexToRbg: PropTypes.func,
    hexToShortHex: PropTypes.func,
    hexToHsl: PropTypes.func,
    rgbToHex: PropTypes.func,
    rgbToShortHex: PropTypes.func,
    rgbToHsl: PropTypes.func,
    shortHexToRgb: PropTypes.func,
    shortHexToHex: PropTypes.func,
    shortHexToHsl: PropTypes.func,
    hslToRgb: PropTypes.func,
    hslToHex: PropTypes.func,
    hslToShortHex: PropTypes.func
};