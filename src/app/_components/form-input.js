export const FormInput = (props) => {
  const {
    inputTag,
    inputOnChange,
    inputValue,
    inputName,
    inputPlaceHolder,
    error,
    errorMessage,
  } = props;
  return (
    <div className="firstNameDiv">
      <p className="firstName">
        {inputTag} <span className="od">*</span>
      </p>
      <input
        className="firstInput"
        placeholder={inputPlaceHolder}
        onChange={inputOnChange}
        name={inputName}
        value={inputValue}
      ></input>
      {error && <p className="errorfirst">{errorMessage}</p>}
    </div>
  );
};
