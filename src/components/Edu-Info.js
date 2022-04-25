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
                <h2>Education</h2>
                
                <hr />
                
                <form>
                    <div>
                        <div>
                            <input type='text' name="schoolName" placeholder="School Name" id="school-name"></input>
                        </div>
                        <div>
                            <input type='text' name="majorName" placeholder="Major Name" id="major-name"></input>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <div>
                            <input type='date' name="dateStudy" placeholder="Date of Study" id="date-study"></input>
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

export default Education;