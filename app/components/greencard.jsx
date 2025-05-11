const GreenCard = ({ children, label, ...props }) => {
  return (
    <div {...props}>
      <span className="rounded-full bg-white w-20 h-20 mb-3 flex items-center justify-center">{children}</span>
      <p className="text-2xl font-bold text-white">{label}</p>
    </div>
  );
};

export default GreenCard;
