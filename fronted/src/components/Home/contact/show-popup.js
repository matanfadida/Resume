import PopMessage from "../../UI/pop-message";

const PopUp = (props) => {
  const { popMessageHandler, click, errorEmail, errorMessage, errorTitle, errorSend } =
    props;
  return (
    <>
      {" "}
      {errorSend && (
        <PopMessage
          onClick={popMessageHandler}
          icon="X"
          title="Error"
          text="the email not send try again !"
        />
      )}
      {errorTitle && (
        <PopMessage
          onClick={popMessageHandler}
          icon="X"
          title="Error"
          text="title can't be empty !"
        />
      )}
      {errorEmail && (
        <PopMessage
          onClick={popMessageHandler}
          icon="X"
          title="Error"
          text="email can't be empty !"
        />
      )}
      {errorMessage && (
        <PopMessage
          onClick={popMessageHandler}
          icon="X"
          title="Error"
          text="message can't be empty !"
        />
      )}
      {click && !errorTitle && !errorEmail && !errorMessage && !errorSend && (
        <PopMessage
          onClick={popMessageHandler}
          icon={"V"}
          title={"Successfully"}
          text={"email is sened secssfully thanks you !"}
        />
      )}
    </>
  );
};

export default PopUp;
