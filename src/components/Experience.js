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
                <h2>Experience</h2>
                
                <hr />
                
                <form>
                    <div>
                        <div>
                            <input type='text' name="companyName" placeholder="Company Name" id="company-name"></input>
                        </div>
                        <div>
                            <input type='text' name="positionTitle" placeholder="Position Title" id="position-title"></input>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <div>
                            <label htmlFor="from-experience">From:</label>
                            <input type='date' name="fromExperience" placeholder="From" id="from-experience"></input>
                        </div>

                        <div>
                            <label htmlFor="from-experience">To:</label>
                            <input type='date' name="toExperience" placeholder="To" id="to-experience"></input>
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

export default Experience;