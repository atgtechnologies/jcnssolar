import { toast } from "sonner";
import { uploadImageCloudinary } from "./components/lib/cloudinary";

export async function UploadProperty(images, property) {
  try {
    const imagePromises = images.map((image) => uploadImageCloudinary(image.file).then((d) => d.json()));

    const imageResponse = await Promise.all(imagePromises);
    toast.success("Images uploaded syccessfully");
    // const newProperty = {
    //   ...property,
    //   images: imageResponse.map(({ secure_url: url, bytes, created_at, public_id }) => ({ url, bytes, created_at, public_id })),
    // };
    // const response = await fetch("/api/products", {
    //   headers: { "Content-Type": "application/json" },
    //   method: "POST",
    //   body: JSON.stringify(newProperty),
    // }).then((d) => d.json());
    if (!response.success) return { message: response.message, success: false };
    return { success: true, ...response };
  } catch (e) {
    console.log(e);
    return { message: e.data?.message || e.message, success: false };
  }
}
