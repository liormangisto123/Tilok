
import React, { useState } from "react";
import Select from "react-select";
import "./css/Select.css";

export default function Selected(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const placeHolder = props.place;
  const styles = {
    menu: styles => ({...styles, "marginTop":0, "maxWidth": "100%","left":9,"right":3,"width":"auto"})
  }
  return (
    <div className="selected">
      <Select
        placeholder={placeHolder}
        name={props.name}
        defaultValue={selectedOption}
        onChange={props.onChange}
        options={props.list}
        styles={styles}
      />
    </div>
  );
}
