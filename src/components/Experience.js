import { Component } from "react";


class Experience extends Component {
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
            <div className="container experience">
                <form autocomplete="off">
                    <div>
                        <div className="left-side">
                            <h2>Experience</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus porro corporis corrupti reiciendis, iusto temporibus?</p>
                        </div>
                        
                        
                        <div className="right-side-container">
                            <div className="right-side">
                                <div className="row">
                                    <div className="input">
                                        <input type='text' name="companyName" placeholder="Company Name" id="company-name"></input>
                                    </div>
                                    <div className="input">
                                        <input type='text' name="positionTitle" placeholder="Position Title" id="position-title"></input>
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

export default Experience;