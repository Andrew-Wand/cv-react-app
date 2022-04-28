import { Component } from "react";


class Education extends Component {
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
            <div className="container education">
                
                
                
                <form autocomplete="off">
                    <div>
                        <div className="left-side">
                            <h2>Education</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, unde. Molestias veritatis esse voluptatem obcaecati nulla cum eaque ullam odit.</p>
                        </div>

                        <div className="right-side-container">
                            <div className="right-side">
                                <div className="row">
                                    <div className="input">
                                        <input type='text' name="schoolName" placeholder="School Name" id="school-name"></input>
                                    </div>
                                    <div className="input">
                                    <input type='text' name="majorName" placeholder="Major Name" id="major-name"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input">
                                    <input type='date' name="dateStudy" placeholder="Date of Study" id="date-study"></input>
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

export default Education;