import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFlashMessage, setFlashMessage } from "./flashMessageSlice";

function FlashMessage() {
  const dispatch = useDispatch();
  const flashMessage = useSelector(selectFlashMessage);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (flashMessage) {
      setVisibility(true);
    }
    setTimeout(() => {
      setVisibility(false);
      dispatch(setFlashMessage(""));
    }, 5000);
  }, [dispatch, flashMessage]);

  return <>{visibility && <p id="flash-message">{flashMessage}</p>}</>;
}

export default FlashMessage;
