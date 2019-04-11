import React from 'react';
import "../../css/main.scss";
import Button from './button-sign';

class Sign extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            signIn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({
            signIn: !this.state.signIn
        });
    }

    render () {
        const signIn = this.state.signIn;

        const signInForm = (
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"/></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"/></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"/></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <Button
                        label="Sign In"
                        className=""
                        // onClick={}
                    />
                </form>
            </div>
        );
        const signUpForm = (
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"/></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"/></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"/></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Button
                        label="Sing Up"
                        className=""
                        // onClick={}
                    />
                </form>
            </div>
        );
        const overlayLeft = (
            <div className="overlay-panel overlay-left">
                <div className="cta-text-container">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <Button
                        className="ghost"
                        // id="signIn"
                        onClick={this.handleClick}
                        label="Sign In"
                    />
                </div>
            </div>
        );
        const overlayRight = (
            <div className="overlay-panel overlay-right">
                <div className="cta-text-container">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <Button
                        className="ghost"
                        // id="signUp"
                        onClick={this.handleClick}
                        label="Sign Up"
                    />
                </div>
            </div>
        );

        return (
            <div className={signIn ? "container sign" : "container right-panel-active"} id="container">
                { signIn ? signInForm : signUpForm }
                <div className="overlay-container">
                    <div className="overlay">
                        { signIn ? overlayRight : overlayLeft }
                    </div>
                </div>
            </div>
        );
    }
}

export default Sign;
