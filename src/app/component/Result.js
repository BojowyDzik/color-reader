import React from "react";
import PropTypes from "prop-types";

export class Result extends React.Component {
    constructor(props){
        super();
        this.state = {
            ResLabel: props.resultLabel
        }
    }
    render() {
        return(
            <div className="form-group">
                <div className="row">
                    <div className="col-md-6" style={{textAlign: "center"}}>
                        {this.state.ResLabel}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <textarea className="form-control" rows="5" style={{backgroundColor: this.props.initialColor}} disabled></textarea>
                        {/*<div style={{backgroundColor: this.props.initialColor, color: this.props.initialColor}}>ss</div>*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" style={{textAlign: "center"}}>
                        {this.props.initialFormat1}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" style={{textAlign: "center"}}>
                        {this.props.initialFormat2}
                    </div>
                </div>
            </div>
        );
    }
}

Result.PropTypes = {
    resultLabel: PropTypes.string,
    initialColor: PropTypes.string,
    initialFormat1: PropTypes.string,
    initialFormat2: PropTypes.string
}