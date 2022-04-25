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
                <h2>General Info</h2>
                
                <hr />
                
                <form>
                    <div>
                        <div>
                            <input type='text' name="firstName" placeholder="First Name" id="firstname"></input>
                        </div>
                        <div>
                            <input type='text' name="lastName" placeholder="Last Name" id="lastname"></input>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <div>
                            <input type='email' name="email" placeholder="Email" id="email"></input>
                        </div>

                        <div>
                            <input type='text' name="phoneNumber" placeholder="Phone Number" id="phone"></input>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="save-button" onClick={this.onSaveClick}>Save</button>
                    </div>
                    

                </form>
            </div>
        );
    }









}

export default GeneralInfo;