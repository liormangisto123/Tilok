
import React, { useState } from "react";
import Select from "react-select";
import "./css/Select.css";

export default function Selected(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const placeHolder = props.place;
  return (
    <div className="selected">
      <Select
        placeholder={placeHolder}
        name={props.name}
        defaultValue={selectedOption}
        onChange={props.onChange}
        options={props.list}
      />
    </div>
  );
}
