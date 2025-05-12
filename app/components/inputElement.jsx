const InputElement = ({ label, type, placeholder }) => {
  return (
    <div className="space-y-3">
      <label className="text-[#6B7280] text-[12px]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="focus:outline-none focus:ring-0 py-3 focus:border-b border-b border-[#9CA3AF] w-full text-neutral-100 font-medium text-sm"
      />
    </div>
  );
};

export default InputElement;
