import "./style.scss";
export default function Input({
  name,
  isEmtyNickName,
  isEmtyName,
  isEmtyPass,
  isEmty,
  isError,
  label,
  value,
  placeholder,
  type,
  onChange,
}) {
  return (
    <div className="inputMain">
      <label>{label}</label>
      <div className="inputMain_wrapper">
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          name={name}
        />
        <span className="error">
          {isEmtyNickName || isEmtyName || isEmty || isError || isEmtyPass}
        </span>
      </div>
    </div>
  );
}
