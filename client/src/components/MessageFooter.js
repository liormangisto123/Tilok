import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { Button } from "./Button";
import "../components/css/profile.css";
import "../components/css/footer.css";
export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section>
        <form className="formFooter">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="footer-input"
            required
          />

          <button
            type="button"
            className="u"
            id="send"
            value="send"
            onClick={() => this.openModal()}
          >
            send
          </button>
        </form>

        <Modal
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <a
              href="javascript:void(0);"
              className="closeX"
              onClick={() => this.closeModal()}
            >
              x
            </a>
          </div>
          <div className="footerMg">
            Thanks.
            <br />
            Your email has been sent, the webmaster will get back to you soon.
          </div>
        </Modal>
      </section>
    );
  }
}
