import Image from "next/image";
import generator1 from "@/app/components/images/300w-generator.jpg";
import Button from "@/app/components/button";
import ProductImages from "@/app/components/productImageCollections";
import Subheading from "@/app/components/subheading";

const ProductDetails = () => {
  const arrayImages = [
    { src: "/images/social-media.png" },
    { src: "/images/social-media.png" },
    { src: "/images/social-media.png" },
    { src: "/images/social-media.png" },
  ];
  return (
    <>
      <div className="contentMargin space-y-10 split:space-y-20">
        <div className="py-7 split:py-[60px] split:flex justify-center">
          <div className="space-y-2 split:space-y-5">
            <Subheading>Jcns Solar Generator</Subheading>
            <p className="text-sm split:text-lg">Home / Our product gallery / Jolar solar Generator</p>
          </div>
        </div>
        <div className="max-split:flex gap-y-4 flex-col contents">
          <div className="max-split:contents  flex items-center gap-x-[34px] ">
            <div className="flex-[545] flex items-center border-borderStroke border-[1.35px] rounded-[8px] ">
              <Image src={generator1} alt={"Product Image"} width={545} className="w-full " />
            </div>
            <div className="flex-[733] max-split:order-2 space-y-12">
              <div className="space-y-3 split:space-y-6">
                <h2 className="text-xl font-medium text-neutral-100">Description</h2>
                <p className="text-lg/[150%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque sequi modi adipisci odit itaque dicta soluta ad dolorem
                  laudantium, consequatur consectetur corrupti ipsum facere perspiciatis sapiente nostrum! Itaque ad accusantium aperiam corporis.
                  Libero pariatur aut sit voluptas culpa enim iusto quo quas ratione fugiat? Reprehenderit distinctio, veritatis aperiam provident vel
                  magni officia velit debitis minus delectus! Culpa natus cum recusandae, aliquam, illo rerum repellat autem magnam neque vero veniam
                  sequi qui dolorem, quia deserunt accusamus quos. Rerum adipisci doloremque voluptatum, ipsum sapiente a exercitationem! Ad quae ea
                  possimus sunt laborum quo, perferendis expedita porro sint, aliquam animi similique hic.
                </p>
              </div>
              <div className="flex gap-x-[10px] split:gap-x-[30px]">
                <h3 className="text-[30px] split:text-4xl font-bold text-[#191919]">₦ 600,0000</h3>
                <Button href="">Buy Now</Button>
              </div>
            </div>
          </div>
          <ProductImages arrayImages={arrayImages} title="Jcns Solar Generator" activeIndex={0} />
        </div>
        <div id="specifications" className="space-y-5 split:space-y-[38px] mt-20">
          <div className="flex justify-center">
            <div className=" relative space-y-[10px] split:space-y-[27px] inline-block ">
              <p href="#specifications" className="text-2xl">
                Specifications
              </p>
              <span className="h-1 bg-primary rounded-[8px] w-full absolute bottom-0 max-split:max-w-[200px] max-split:mx-auto "></span>
            </div>
          </div>
          <div className="border border-borderStroke  max-split:border-[#000011] rounded-lg max-w-[1200px] mx-auto">
            <h4 className="font-bold text-lg split:text-2xl py-3 px-10px border-b  border-b-borderStroke px-2 split:px-6 max-split:border-b-[#000011]">
              Product Parameters
            </h4>
            <div className="border border-borderStroke max-split:border-[#000011]">
              <div className="split:flex justify-between split:px-6 split:py-[10px] border-b border-b-borderStroke max-split:border-b-[#000011] ">
                <p className="text-bold max-split:border-b px-1 py-2 border-b-borderStroke">Max Power</p>
                <p className="px-1 py-2">600w</p>
              </div>
              <div className="split:flex justify-between split:px-6 split:py-[10px] border-b border-b-borderStroke  max-split:border-b-[#000011]">
                <p className="text-bold max-split:border-b px-1 py-2 border-b-borderStroke">Max Power</p>
                <p className="px-1 py-2">600w</p>
              </div>
              <div className="split:flex justify-between split:px-6 split:py-[10px] border-b border-b-borderStroke  max-split:border-b-[#000011]">
                <p className="text-bold max-split:border-b px-1 py-2 border-b-borderStroke">Max Power</p>
                <p className="px-1 py-2">600w</p>
              </div>
              <div className="split:flex justify-between split:px-6 split:py-[10px] ">
                <p className="text-bold max-split:border-b px-1 py-2 border-b-borderStroke">Max Power</p>
                <p className="px-1 py-2">600w</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
