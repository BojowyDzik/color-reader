import React from "react";
import { render } from "react-dom";

class App extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                ENTER A COLOR
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-inline">
                                    <input className="form-control mr-sm-2" type="text"/>
                                    <button className="btn btn-primary mr-sm-2">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                ENTER A COLOR
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{backgroundColor: "blue", color: "blue"}}>ss</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("app"));