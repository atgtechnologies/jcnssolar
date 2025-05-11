const ProductSegmentation = ({ title, children }) => {
  return (
    <div>
      <h2 className="mb-4 font-bold text-neutral-100">{title}</h2>
      {children}
    </div>
  );
};

export default ProductSegmentation;
