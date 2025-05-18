const ProductSegmentation = ({ title, children }) => {
  return (
    <div>
      <h2 className="mb-4 text-xl split:text-[24px] font-medium split:font-bold text-neutral-100">{title}</h2>
      {children}
    </div>
  );
};

export default ProductSegmentation;
