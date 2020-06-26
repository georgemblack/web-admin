import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from "../store/Selectors";

function TestView(props) {
  const message = useSelector(getMessage);
  const dispatch = useDispatch();

  return (
    <>
      <p>{message}</p>
    </>
  );
}

export default TestView;
