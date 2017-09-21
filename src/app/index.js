import React from "react";
import { render } from "react-dom";
import { Input } from "./component/Input";
import { Result } from "./component/Result";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            inputLabel: "ENTER A COLOR",
            resultLabel: "SELECTED COLOR"
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <Input
                            inputLabel={this.state.inputLabel}
                        />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <Result
                            resultLabel={this.state.resultLabel}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("app"));