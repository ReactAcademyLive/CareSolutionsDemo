import { useEffect } from "react";
import { Form } from "react-bootstrap";

function MyTextbox({ count }) {
  //useEffect(modifyDOM);
  //modifyDOM();

  function modifyDOM() {
    const box = document.getElementById("box");
    if (box) {
      box.value = count;
    }
  }

  return <Form.Range id="box" value={0} readOnly />;
}

export default MyTextbox;
