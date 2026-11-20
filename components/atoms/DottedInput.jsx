export default function DottedInput({ name, value, onChange, placeholder = "", type = "text", required = false }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-transparent border-b border-dotted border-gray-400 text-white text-sm px-1 py-0.5 focus:outline-none focus:border-[#84CC16]"
    />
  );
}