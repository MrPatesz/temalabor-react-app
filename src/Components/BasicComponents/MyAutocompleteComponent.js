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
        if (value === props.baseValue) return true;
        var itemLower = item.toLowerCase();
        var valueLower = props.value.toLowerCase();
        return itemLower.includes(valueLower);
      }}
      menuStyle={{
        borderRadius: "3px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        background: "rgba(255, 255, 255, 0.9)",
        padding: "2px 0",
        fontSize: "90%",
        position: "fixed",
        overflow: "auto",
        maxHeight: "50%",
        zIndex: "999",
      }}
    />
  );
}

export default MyAutocompleteComponent;
