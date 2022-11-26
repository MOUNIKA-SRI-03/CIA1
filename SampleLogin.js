import React from "react";
import "./Dynamic.css";

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
class PasswordStrength extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: "white",
                name: '',
                email: '',
                password: ''
        }
        this.analyze = this.analyze.bind(this);
        this.length = this.value;
    }
    

    analyze(event) {
        if(strongRegex.test(event.target.value)) {
            this.setState({backgroundColor : "green" });
        } else if(mediumRegex.test(event.target.value)) {
            this.setState({ backgroundColor: "#F4B400" });
        } else {
            this.setState({backgroundColor: "#DB4437" });
        }
    }

    render() {
        return (
            <div className="outerbox">
            <h2><center><b>Form Validation</b></center></h2>
            <div >
                <p><label>Enter the UserName</label></p>
                <p><input style={{ backgroundColor: "white" }}
                type="text" name="name" placeholder="Your Name"  onChange={this.analyze} 
                 /></p>
                <label>Please fill the column</label>
                </div>
            

            <div >
                <p><label>Email</label></p>
                <p><input style={{ backgroundColor: "white" }}
                type="email" name="email" placeholder="Your Email"  onChange={this.analyze} /></p>
            </div>
            <label>Please fill the column</label>

            <div >
                <p><label>Password</label></p>
                <p><input style={{ backgroundColor: this.state.backgroundColor }} 
                type="text" name="password"  onChange={this.analyze} /></p>
            </div>
            <label>Please fill the column</label>
            </div>
            
        );
    }

}

export default PasswordStrength;
///
