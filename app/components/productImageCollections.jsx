"use client";

import { twJoin, twMerge } from "tailwind-merge";

const ProductImages = ({ activeIndex, arrayImages, title }) => {
  return (
    <div className="mt-7 split:mt-10 flex-wrap flex gap-3">
      {arrayImages.map((ai, i) => (
        <div
          key={i}
          className={twJoin(
            "max-w-[150px] p-2 split:max-w-[273.5px] aspect-[273.5/151] border-borderStroke border-[2px] rounded-[8px] " +
              (i == activeIndex ? "border-primary" : "")
          )}
        >
          <img src={ai.src} alt={title + "Product image " + i} />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
