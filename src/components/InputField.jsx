const inputStyle =
  "w-full p-2 bg-gray-100 border-2 border-gray-300 rounded-lg text-gray-900 outline-none";

function InputField({
  label,
  type,
  id,
  name,
  placeholder,
  onChange,
  step,
  min,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={inputStyle}
        step={step}
        min={min}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default InputField;
