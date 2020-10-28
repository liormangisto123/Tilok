import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./css/Select.css";

export default function Selected(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    console.log(props.value);
  }, []);
  const placeHolder = props.place;
  const styles = {
    menu: (styles) => ({
      ...styles,
      marginTop: 0,
      maxWidth: "100%",
      left: 9,
      right: 3,
      width: "auto",
    }),
  };
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    props.onChange(selectedOption);
  };
  const setInput = (word) => {
    return word[0] + word.substring(1).toLowerCase();
  };
  return (
    <div className="selected">
      <Select
        placeholder={placeHolder}
        name={props.name}
        value={
          selectedOption || {
            value:  props.value||props.name,
            label: props.value||props.name,
            name: props.name,
          }
        }
        // defaultValue={selectedOption}
        onChange={handleChange}
        onSelectOption={props.onChange}
        options={props.list}
        styles={styles}
      />
    </div>
  );
}
