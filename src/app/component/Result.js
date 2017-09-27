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
            <div className="form-group" style={{textAlign: "center"}}>
                <div className="row">
                    <div className="col-md-12">
                        <h6>{this.state.ResLabel}</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8" style={{
                        backgroundColor: this.props.initialColor,
                        border: "1px solid lightgrey",
                        height: "150px",
                        borderRadius: "5px"
                    }}>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.initialFormat1}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
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
};