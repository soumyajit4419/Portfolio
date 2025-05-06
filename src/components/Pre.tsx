import React from "react";
function Pre(props: { load: any; }) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
