import { Button } from "react-bootstrap";
import React from "react";

export function MyButton({ onClick, changeAmount }) {
  return (
    <Button
      className="me-4"
      variant={changeAmount > 0 ? "primary" : "warning"}
      onClick={() => {
        onClick(changeAmount);
      }}
    >
      {changeAmount > 0 ? "Increase" : "Decrease"} by {Math.abs(changeAmount)}
    </Button>
  );
}

//40,000 components in Facebook!
//Team tries very hard to be backwards compatible...
