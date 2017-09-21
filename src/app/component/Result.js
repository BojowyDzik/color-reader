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
            <div>
                <div className="row">
                    <div className="col-md-12">
                        {this.state.ResLabel}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{backgroundColor: "blue", color: "blue"}}>ss</div>
                    </div>
                </div>
            </div>
        );
    }
}

Result.PropTypes = {
    resultLabel: PropTypes.string
}