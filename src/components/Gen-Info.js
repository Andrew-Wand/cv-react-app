import { Component } from "react";


class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onSaveClick(e) {
        e.preventDefault();
        this.props.clickHandler();
    }





    render() {
        return (
            <div className="container general-info">
                 
                
                
                <form autocomplete="off">
                    <div className="gen-info">
                        <div className="left-side">
                            <h2>General Info</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, pariatur?</p>
                        </div>

                        <div className="right-side-container">
                            <div className="right-side">
                                <div className="row">
                                    <div className="input">
                                        <input type='text' name="firstName" placeholder="First Name" id="firstname"></input>
                                     </div>
                                    <div className="input">
                                        <input type='text' name="lastName" placeholder="Last Name" id="lastname"></input>
                                    </div>
                                </div>

                                <div className="row">
                                <div className="input">
                                    <input type='email' name="email" placeholder="Email" id="email"></input>
                                </div>
                                <div className="input">
                                <input type='text' name="phoneNumber" placeholder="Phone Number" id="phone"></input>
                             </div>
                                </div>


                               
                                
                            
                        </div>
                        </div>

                       
                       
                    </div>


                 

                    <div className="save-button-container">
                        <button type="submit" className="save-button" onClick={this.onSaveClick}>Save</button>
                    </div>
                    

                </form>
                <hr />
            </div>
            
        );
    }









}

export default GeneralInfo;