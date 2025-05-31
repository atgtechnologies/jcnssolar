export async function uploadImageCloudinary(img) {
  const formData = new FormData();
  formData.set("file", img);
  formData.set("upload_preset", "jcnssolarProductUpload");
  formData.append("cloud_name", process.env.CLOUDINARY_NAME);
  return await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/upload`, {
    method: "POST",
    body: formData,
  });
}
