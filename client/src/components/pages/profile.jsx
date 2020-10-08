import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import axios from '../../../src/api/index';
import '../../components/css/modal.css';
import CommentGroup from '../CommentGroup'




export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      guides: []
    }
  }
  componentDidMount() {
    axios.getAllGuides().then(res => {
      console.log(res);
      this.setState({ guides: res.data.data })
    })

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
  closePreson() {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <section>
        {/* { <input type="button" value="Open" onClick={() => this.openModal()} /> */}
        <img className='cards_item_img' alt='Click' src={this.props.src} onClick={() => this.openModal()} width="180px"
          height="160px" />
        <h5 className='clickOpen' onClick={() => this.openModal()}>{this.props.text} </h5>

        <Modal visible={this.state.visible} width="90%" height="95%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <div >
            <a href="javascript:void(0);" onClick={() => this.closeModal()} className='closeOpen'>X</a>

            <div className="allProps ">
              <h1>The profile of {this.props.text}</h1>
            </div>
            <div>
              <h4>From:{this.props.country}</h4>
              <br></br>
              <h4>Cost:{this.props.cost}</h4>
            </div>

            <div>
              <img src={this.props.src} height="200px" width="250px" />
              
            </div>
          </div>
          <div >
            <p className="about">
              <h5>
                About My
              </h5>
              {this.props.summary}
              {/* <button id="read-more-about_short_eng" class="btn sm-btn white-btn showmore-btn">Read more</button> */}
            </p>
            {/* <p className="about">
              <table border="1" cellpadding="10" height="40%" width="100%">
                <tr>
                  <th>About My</th>
                </tr>
                <tr>
                  <td>I have experience in extreme trips,
                      Guarantees 100% safety and enjoyment of every moment. </td>
                </tr>
              </table>             
            </p> */}
          </div>
          <div>
            <br></br>
            <table >
              Comments:{' '+this.props.com + ' '}
              {/* {this.props.date} */}
              <CommentGroup />
            </table>
          </div>
        </Modal>
      </section>
    );
  }
}