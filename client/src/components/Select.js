import React from "react";
import Select from "react-select";
import "./css/Select.css";
import $ from "jquery";


class Selected extends React.PureComponent {
   
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );

  };
  componentDidMount(){
    
    $(document).ready(()=>{
        $(".css-1wa3eu0-placeholder").text(this.props.country);
        $(".css-1wa3eu0-placeholder").text(this.props.city);
        $(".css-1wa3eu0-placeholder").text(this.props.language);
    });
    // appContext.setState({{this.props.Name}: this.state.selectedOption })

   
}
  render() {
    const { selectedOption } = this.state;
    

    return (

      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.props.list}
      />
    );
  }
}
export default Selected;
