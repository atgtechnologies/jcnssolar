const InputElement = ({ label, type, placeholder, value, onChange, error, ...rest }) => {
  return (
    <div className="space-y-3">
      <label className="text-[#6B7280] text-[12px]">{label}</label>
      {error && <div className="text-red-500 text-xs mb-1">{error}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="focus:outline-none focus:ring-0 py-3 focus:border-b border-b border-[#9CA3AF] w-full text-neutral-100 font-medium text-sm"
        {...rest}
      />
    </div>
  );
};

export default InputElement;
