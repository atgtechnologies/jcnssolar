import Product from "../components/products/product";
import ProductSegmentation from "../components/products/Segmentation";
import solar1 from "@/app/components/images/panel 1.png";
import solar2 from "@/app/components/images/panel 21.png";
import solar3 from "@/app/components/images/panel 31.png";

const Products = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-[36px] text-neutral-100 font-bold ">Our Product Gallery</h1>

      <ProductSegmentation title="Solar Panels">
        <div className="flex gap-x-4">
          <Product className="" image={solar1} alt="Solar Panels products one" />
          <Product className="" image={solar2} alt="Solar Panels products one" />
          <Product className="" image={solar3} alt="Solar Panels products one" />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Solar Powered Fans">
        <div className="flex flex-wrap gap-4">
          <Product className="basis-auto" image={solar1} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar2} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Solar Powered Home Lighting Systems">
        <div className="flex flex-wrap gap-4">
          <Product className="basis-auto" image={solar1} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar2} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Solar Energy Storage Systems">
        <div className="flex flex-wrap gap-4">
          <Product className="basis-auto" image={solar1} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar2} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Solar Energy Storage Systems">
        <div className="flex flex-wrap gap-4">
          <Product className="basis-auto" image={solar1} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar2} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
          <Product className="basis-auto" image={solar3} alt="Solar Panels products one" />
        </div>
      </ProductSegmentation>
    </div>
  );
};

export default Products;
