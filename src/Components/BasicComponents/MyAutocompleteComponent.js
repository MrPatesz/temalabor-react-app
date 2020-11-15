import React from "react";
import Autocomplete from "react-autocomplete";

function MyAutocompleteComponent(props) {
  return (
    <Autocomplete
      getItemValue={(item) => item.toString()}
      items={props.list}
      renderItem={(item, isHighlighted) => (
        <div style={{ background: isHighlighted ? "lightblue" : "white" }}>
          {item}
        </div>
      )}
      value={props.value}
      onChange={(e) => props.setter(e.target.value)}
      onSelect={(val) => props.setter(val)}
      shouldItemRender={(item, value) => {
        if(value === props.baseValue) return true;
        var itemLower = item.toLowerCase();
        var valueLower = props.value.toLowerCase();
        return itemLower.includes(valueLower);
      }}
    />
  );
}

export default MyAutocompleteComponent;
