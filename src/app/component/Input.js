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
                HEX: /^\#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                SHORT_HEX: /^\#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                RGB: /^rgb\((\d{1,3})\,(\d{1,3})\,(\d{1,3})\)$/,
                HSL: /^hsl\((\d{1,3})\,(\d{1,3})\%\,(\d{1,3})\%\)$/
            }
        }
    }

    colorCheck() {
        if(this.state.inputValue.match(this.state.REGEX.HEX)) {
            this.setState({
                invalidColorMessage: false
            });
            console.log(true);
        }else if(this.state.inputValue.match(this.state.REGEX.SHORT_HEX)){
            this.setState({
                invalidColorMessage: false
            });
            console.log(true);
        }else if(this.state.inputValue.match(this.state.REGEX.RGB)){
            this.setState({
                invalidColorMessage: false
            });
            console.log(true);
        }else if(this.state.inputValue.match(this.state.REGEX.HSL)){
            this.setState({
                invalidColorMessage: false
            });
            console.log(true);
        }else {
            this.setState({
                invalidColorMessage: true
            });
        }
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
    inputLabel: PropTypes.string
};