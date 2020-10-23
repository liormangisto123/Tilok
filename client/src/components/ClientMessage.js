import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import '../components/css/profile.css'
import emailjs from 'emailjs-com';


export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }


    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_p9f7z4g', e.target, 'user_De4KSXDiwzq0OzlXZsrxy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section>
                <form className="contact-form" onSubmit={this.sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <input type="hidden" name="user_name" value={this.props.fullname} />
                    <input type="hidden" name="Country" value={this.props.Country} />
                    <input type="hidden" name="cost" value={this.props.cost} />
                    <input type="hidden" name="phone" value={this.props.phone} />
                    <input type="hidden" name="user_email" value={this.props.email} />
                    <input type="hidden" name="message" value={this.props.sum} />
                   
                    <button type="submit" className="bookNow" value="Book Now" onClick={() => this.openModal()}>
                        Book Now
                    </button>
                    {/* <button className="button" type="submit" value="I Want Him">I Want Him</button> */}

                </form>
                 


                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <a className="close" href="javascript:void(0);" onClick={() => this.closeModal()}>X</a>

                    <div className="message">
                      
                        Thanks.<br />
                        The details have been successfully received,<br />
                       we will get back to you soon.
                    </div>

                </Modal>
            </section>
        );
    }
}