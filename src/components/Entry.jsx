import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.Emoji}
        </span>
        <span>{props.Name}</span>
      </dt>
      <dd>{props.Description}</dd>
    </div>
  );
}
export default Entry;
