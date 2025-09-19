export const FormInput = (props) => {
  const {
    inputTag,
    inputOnChange,
    inputValue,
    inputName,
    inputPlaceHolder,
    error,
    errorMessage,
    inputBorderColor,
    type,
  } = props;
  return (
    <div className="firstNameDiv">
      <p className="firstName">
        {inputTag} <span className="od">*</span>
      </p>
      <input
        type={type}
        className="firstInput"
        placeholder={inputPlaceHolder}
        onChange={inputOnChange}
        name={inputName}
        value={inputValue}
        // style={{
        //   borderColor: { inputBorderColor } === false ? "red" : "blue",
        // }}
      ></input>
      {error && <p className="errorfirst">{errorMessage}</p>}
    </div>
  );
};
