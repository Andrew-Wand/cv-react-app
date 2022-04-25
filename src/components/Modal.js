import { Component } from "react";


class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
       let modal = document.getElementById('modal');
       modal.classList.add('hide');
       document.body.style.overflow = 'auto';
    }





    render() {
        return (
            <div className="modal-container hide" id="modal">
                <div className="modal" id="modal2">
                    <div>
                        <button onClick={this.handleClose} id='close-modal'>X</button>
                    </div>

                    <h2>General Info</h2>
                    <hr />
                    <h3>Full Name: {this.props.info.general_info.first_name + ' ' + this.props.info.general_info.last_name}</h3>
                    <h3>Email: {this.props.info.general_info.email}</h3>
                    <h3>Phone Number: {this.props.info.general_info.phone}</h3>
                    <hr />
                    
                    <h2>Experience</h2>
                    <hr />
                    <h3>Company Name: {this.props.info.experience.company_name}</h3>
                    <h3>Position Title: {this.props.info.experience.position_title}</h3>
                    <h3>From: {this.props.info.experience.date.from}</h3>
                    <h3>To: {this.props.info.experience.date.to}</h3>
                    
                    <h2>Education</h2>
                    <hr />
                    <h3>School Name: {this.props.info.education.school_name}</h3>
                    <h3>Major Name: {this.props.info.education.major_name}</h3>
                    <h3>Date: {this.props.info.education.date}</h3>
                    
                   

                </div>
            </div>
        )
    }









}

export default Modal;