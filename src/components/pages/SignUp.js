import React, { Component } from 'react';
import '../resources/css/SignUp.css';


class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname  : "",
            email      : "",
            password   : "",
            mobile     : "",
            firstnameError : false,
            emailError : false,
            mobileError : false,
            passwordError : false
        }

        this.validateForm = this.validateForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    validateForm(){
        const firstname = this.state.firstname;
        const email     = this.state.email;
        const password  = this.state.password;
        const mobile    = this.state.mobile;
        

        if(firstname){
            this.setState({firstnameError:false})
        }
        else{
            this.setState({firstnameError:true})
        }

        if(email){
            this.setState({emailError:false})
        }
        else{
            this.setState({emailError:true})
        }

        if(password){
            this.setState({mobileError:false})
        }
        else{
            this.setState({mobileError:true})
        }

        if(mobile){
            this.setState({passwordError:false})
        }
        else{
            this.setState({passwordError:true})
        }
    }

    onChangeInput(event){
        
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value})        

    }

    render() {
        return (
            <>

                <div className="container register">
                    <div className="row">
                        <div className="col-md-9 register-right">
                            
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                                    <h3 className="register-heading">Apply as a Employee</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="firstname" style={{border:(this.state.firstnameError)?"1px solid red":''}} placeholder="firstname *"  onChange={(e) => this.onChangeInput(e)}/>
                                            </div><br/>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="email" style={{border:(this.state.emailError)?"1px solid red":''}} placeholder="Email *"  onChange={(e) => this.onChangeInput(e)} />
                                            </div><br/>
    
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="password" className="form-control"  name="password" style={{border:(this.state.passwordError)?"1px solid red":''}} placeholder="Password *"   onChange={(e) => this.onChangeInput(e)}/>
                                            </div><br/>
                                            <div className="form-group">
                                                <input type="text" className="form-control"  name="mobile" style={{border:(this.state.mobileError)?"1px solid red":''}} placeholder="Mobile #"  onChange={(e) => this.onChangeInput(e)}/>
                                            </div>
                                            <input type="submit" className="btnRegister" value="Register" onClick={this.validateForm} />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Signup;