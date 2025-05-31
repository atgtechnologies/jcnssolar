"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
// import { revalidateAllRoute } from "@/app/actions";
import Dropzone from "@/app/components/uploadImage";
import { UploadProperty } from "@/app/utils";

const categories = ["Inverter", "Solar Panel", "Battery", "Solar Kit", "Lighting", "Fan", "Other"];

const NewProperty = () => {
  const [images, setImages] = useState([]);
  const [specName, setSpecName] = useState("");
  const [specValue, setSpecValue] = useState("");
  const [specs, setSpecs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddSpec = (e) => {
    e.preventDefault();
    if (specName && specValue) {
      setSpecs([...specs, { name: specName, value: specValue }]);
      setSpecName("");
      setSpecValue("");
    }
  };

  const handleDeleteSpec = (idx) => {
    setSpecs(specs.filter((_, i) => i !== idx));
  };

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async function (data) {
    setIsSubmitting(true);
    if (!images.length) {
      setIsSubmitting(false);
      return toast.error("Images must be provided", { position: "top-right" });
    }
    const response = await UploadProperty(images, data);
    // await revalidateAllRoute();
    setIsSubmitting(false);
    if (!response.success) {
      return toast.error(response.message);
    }
    return router.push("/listings/" + response.id);
  };
  return (
    <>
      {/* {isSubmitting && <Spinner />} */}
      <div className="contentMargin">
        <main className="px-7 pt-[49px] border-x-2 border-x-gray">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="grid gap-y-10 grid-cols-1 md:grid-cols-2 gap-x-8 max-w-[1000px]">
            <div className="border-2 space-y-10 border-gray col-span-1  rounded-[8px] px-[23px] py-[20px]">
              <div className="space-y-5">
                <h1 className="text-lg text-main font-medium">Select Images</h1>
                <div>
                  <Dropzone productImages={[images, setImages]} />
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-main text-lg font-medium">Property Details</h1>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="block">Product Name</label>
                    <input
                      type="text"
                      {...register("title", { required: "The Name of the property is required" })}
                      className={`rounded-2xl border ${!errors.title ? "border-gray" : "border-red-600"} text-main block w-full p-2 `}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block">Category</label>
                    <select
                      {...register("category", { required: "Please select a category" })}
                      className={`rounded-2xl border ${!errors.category ? "border-gray" : "border-red-600"} text-main block w-full p-2`}
                    >
                      <option value="">-- Select a category --</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block">Price</label>
                    <input
                      type="Number"
                      {...register("price", { required: "the price is required" })}
                      placeholder="10,999,999"
                      className={`rounded-2xl border ${!errors.price ? "border-gray" : "border-red-600"} text-main block w-full p-2 `}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block">Description</label>
                    <textarea
                      {...register("description", { required: "the description is required" })}
                      className={`rounded-2xl border ${!errors.description ? "border-gray" : "border-red-600"} text-main block w-full p-2 `}
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-lg text-main font-medium">Specifications</h1>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Name (e.g. Power)"
                    className="border rounded px-2 py-1 flex-1"
                    value={specName}
                    onChange={(e) => setSpecName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Value (e.g. 500W)"
                    className="border rounded px-2 py-1 flex-1"
                    value={specValue}
                    onChange={(e) => setSpecValue(e.target.value)}
                  />
                  <button onClick={handleAddSpec} className="bg-primary text-white px-3 py-1 rounded font-semibold" type="button">
                    Add
                  </button>
                </div>
                <ul className="space-y-1">
                  {specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-gray-100 rounded px-2 py-1">
                      <span className="flex-1">
                        {spec.name}: {spec.value}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteSpec(idx)}
                        className="text-red-500 hover:text-red-700 font-bold text-lg"
                        title="Delete"
                      >
                        &times;
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-1 self-start pb-10 rounded-2xl border-2 border-gray space-y-[31px]">
              <div className="ps-[30px] bg-background rounded-t-2xl">
                <h3 className="text-main py-4">Preview</h3>
              </div>
              <div className="space-y-3 p-[20px]">
                <div className="">
                  {!Boolean(images.length) ? (
                    <div className="bg-main/20 rounded-md flex items-center justify-center aspect-[4/3] w-full">
                      <svg width="120px" height="120px" viewBox="0 0 24 24" fill="none" stroke="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M10 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V16M3 3L21 21M11.6598 15.9809C10.2795 15.8251 9.18287 14.7327 9.02069 13.3543M3 9V17C3 18.1046 3.89543 19 5 19H14"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <img
                      src={images[0].preview}
                      className="rounded-[16px] w-full aspect-[4/3] object-cover object-center border border-gray"
                      alt="The picture of your new property"
                    />
                  )}
                  {Boolean(images.length) && (
                    <div className="flex gap-x-[14px] items-center mt-2">
                      <h4 className="font-medium text-main">File Size:</h4>
                      <div className="border rounded-full border-gray w-[40px] h-[40px] flex items-center justify-center text-xs">
                        {Math.round(images.reduce((acc, img) => acc + img.file.size, 0) / 1000000)} mb
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg text-main">{watch("title")}</h3>
                  {Boolean(watch("price")?.trim().length) && (
                    <div className="space-y-1">
                      <h3 className="text-lg text-main">Price</h3>
                      <p className="text-base/[25px]">{watch("price")} </p>
                    </div>
                  )}
                  {Boolean(watch("category")?.trim().length) && (
                    <div className="space-y-1">
                      <h3 className="text-lg text-main">Category</h3>
                      <p className="text-base/[25px]">{watch("category")} </p>
                    </div>
                  )}
                  {Boolean(watch("description")?.trim().length) && (
                    <div className="space-y-1">
                      <h3 className="text-lg text-main">Description</h3>
                      <p className="text-base/[25px]">{watch("description")} </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-x-2 p-[10px]">
                <button className="rounded-[16px] w-full py-[10px] border border-main text-main font-medium hover:text-white hover:bg-main">
                  Save to Drafts
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="disabled:cursor-not-allowed disabled:bg-text disabled:text-main rounded-[16px] w-full py-[10px] border border-primary bg-primary text-white hover:text-primary hover:bg-borderStroke"
                >
                  {isSubmitting ? "Publishing..." : " Publish"}
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default NewProperty;
