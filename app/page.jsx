import Image from "next/image";
import Button from "./components/button";
import GreenCard from "./components/greencard";
import RectangleSvg from "./components/svg/rectanglepatterns";
import ProductSegmentation from "./components/products/Segmentation";
import solar1 from "@/app/components/images/panel 1.png";
import solar2 from "@/app/components/images/panel 21.png";
import solar3 from "@/app/components/images/panel 31.png";
import solarfan1 from "@/app/components/images/solar fan 1.png";
import solarfan2 from "@/app/components/images/solar fan 2.png";
import solarfan3 from "@/app/components/images/solar fan 4.png";
// import product1 from "./components/images/product1.png";
// import product2 from "./components/images/product2.png";
// import product3 from "./components/images/product3.png";
// import product4 from "./components/images/product4.png";
import SubHeading from "./components/subheading";
import CustomerReview from "./components/CustomerReview";
import FullStar from "./fullstar";
import HalfStar from "./halfstar";
import FaqQuestions from "./components/faq";
import Product from "./components/products/product";
import AboutUsSection from "./components/about-us-section";
import ContactUsSection from "./components/contact-section";

export default function Page() {
  return (
    <>
      <section className="contentMargin">
        <SubHeading>Power Your Future with Solar Energy</SubHeading>
        <p className="text-grayy text-xl mb-3">
          Cut your electricity bills, increase your home’s value, and contribute to a cleaner planet with our reliable and affordable solar energy
          solutions.
        </p>
        <Button href="">Shop Now</Button>

        <div id="banner" className="relative mt-10">
          <img src="null" className="aspect-[2.187] w-full block max-split:aspect-[366/510] bg-primary rounded-[20px]" alt="" />
          <div className="split:absolute -bottom-0 left-0">
            <div id="caption" className="bg-red max-split:after:hidden  pt-6 pb-8 split:pb-[18px] split:ps-5 relative max-w-[550px] bg-white">
              <h1 className="text-2xl font-bold mb-3">Our Solar products</h1>
              <span>
                Our solar energy solutions are designed to meet the needs of every customer, from residential to commercial. We offer a wide range of
                products and services to help you harness the power of the sun.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="contentMargin py-10 split:py-20 relative grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-split:border-t max-split:border-t-neutral-400">
        <span className="absolute bottom-10 left-0 z-[-1]">
          <RectangleSvg />
        </span>
        <GreenCard className="bg-primary py-8 px-6 rounded-2xl" label={"Solar power generation system"}>
          <svg className="w-[25px] split:w-10" viewBox="0 0 40 40" fill="none">
            <path
              d="M27.5 5H12.5C11.5054 5 10.5516 5.39509 9.84835 6.09835C9.14509 6.80161 8.75 7.75544 8.75 8.75V35C8.75 35.9946 9.14509 36.9484 9.84835 37.6516C10.5516 38.3549 11.5054 38.75 12.5 38.75H27.5C28.4946 38.75 29.4484 38.3549 30.1517 37.6516C30.8549 36.9484 31.25 35.9946 31.25 35V8.75C31.25 7.75544 30.8549 6.80161 30.1517 6.09835C29.4484 5.39509 28.4946 5 27.5 5ZM23.6188 21.8094L21.1188 26.8094C21.0453 26.9563 20.9436 27.0873 20.8195 27.1949C20.6954 27.3025 20.5514 27.3847 20.3955 27.4366C20.2397 27.4886 20.0752 27.5093 19.9113 27.4977C19.7475 27.486 19.5875 27.4422 19.4406 27.3688C19.2937 27.2953 19.1627 27.1936 19.0551 27.0695C18.9475 26.9454 18.8653 26.8014 18.8134 26.6455C18.7614 26.4897 18.7407 26.3252 18.7523 26.1613C18.764 25.9975 18.8078 25.8375 18.8812 25.6906L20.4781 22.5H17.5C17.2868 22.5002 17.0771 22.4458 16.8909 22.3421C16.7047 22.2383 16.548 22.0887 16.4359 21.9074C16.3238 21.7261 16.2599 21.5191 16.2504 21.3061C16.2408 21.0931 16.2859 20.8813 16.3812 20.6906L18.8812 15.6906C19.0296 15.3939 19.2898 15.1683 19.6045 15.0634C19.9192 14.9585 20.2627 14.9829 20.5594 15.1312C20.8561 15.2796 21.0817 15.5398 21.1866 15.8545C21.2915 16.1692 21.2671 16.5127 21.1188 16.8094L19.5219 20H22.5C22.7132 19.9998 22.9229 20.0542 23.1091 20.1579C23.2953 20.2617 23.452 20.4113 23.5641 20.5926C23.6762 20.7739 23.7401 20.9809 23.7496 21.1939C23.7592 21.4069 23.7141 21.6187 23.6188 21.8094ZM13.75 1.25C13.75 0.918479 13.8817 0.600537 14.1161 0.366117C14.3505 0.131696 14.6685 0 15 0L25 0C25.3315 0 25.6495 0.131696 25.8839 0.366117C26.1183 0.600537 26.25 0.918479 26.25 1.25C26.25 1.58152 26.1183 1.89946 25.8839 2.13388C25.6495 2.3683 25.3315 2.5 25 2.5H15C14.6685 2.5 14.3505 2.3683 14.1161 2.13388C13.8817 1.89946 13.75 1.58152 13.75 1.25Z"
              fill="#00482F"
            />
          </svg>
        </GreenCard>
        <GreenCard className="bg-primary py-8 px-6 rounded-2xl" label="Smart Energy (Energy Storage Solutions)">
          <svg className="w-[25px] split:w-10" viewBox="0 0 40 40" fill="none">
            <path
              d="M36.1225 30.5486C36.0198 30.759 35.86 30.9364 35.6613 31.0604C35.4627 31.1844 35.2332 31.2502 34.9991 31.2502H21.2491V37.5002C21.2491 37.8317 21.1174 38.1496 20.8829 38.384C20.6485 38.6185 20.3306 38.7502 19.9991 38.7502C19.6675 38.7502 19.3496 38.6185 19.1152 38.384C18.8808 38.1496 18.7491 37.8317 18.7491 37.5002V31.2502H4.99906C4.76517 31.25 4.53601 31.1842 4.33765 31.0602C4.13929 30.9363 3.97968 30.7592 3.87697 30.5491C3.77426 30.3389 3.73257 30.1042 3.75664 29.8715C3.78071 29.6389 3.86957 29.4176 4.01313 29.233L11.2006 20.0002H7.49906C7.26558 20.0002 7.03676 19.9348 6.83852 19.8115C6.64028 19.6881 6.48056 19.5117 6.37744 19.3022C6.27433 19.0927 6.23195 18.8585 6.2551 18.6262C6.27825 18.3939 6.36601 18.1727 6.50844 17.9877L19.0084 1.73766C19.1252 1.58594 19.2752 1.46307 19.447 1.37852C19.6187 1.29397 19.8076 1.25 19.9991 1.25C20.1905 1.25 20.3794 1.29397 20.5511 1.37852C20.7229 1.46307 20.8729 1.58594 20.9897 1.73766L33.4897 17.9877C33.6321 18.1727 33.7199 18.3939 33.743 18.6262C33.7662 18.8585 33.7238 19.0927 33.6207 19.3022C33.5176 19.5117 33.3578 19.6881 33.1596 19.8115C32.9614 19.9348 32.7325 20.0002 32.4991 20.0002H28.8053L35.985 29.233C36.1287 29.4175 36.2177 29.6385 36.242 29.8711C36.2663 30.1037 36.2249 30.3384 36.1225 30.5486Z"
              fill="#00482F"
            />
          </svg>
        </GreenCard>
        <GreenCard className="bg-primary py-8 px-6 rounded-2xl" label="Shenzhen Xingzhijie (LED lighting)">
          <svg className="w-[25px] split:w-10" viewBox="0 0 40 40" fill="none">
            <path
              d="M27.5002 36.2501C27.5002 36.5816 27.3685 36.8995 27.1341 37.134C26.8997 37.3684 26.5817 37.5001 26.2502 37.5001H13.7502C13.4187 37.5001 13.1007 37.3684 12.8663 37.134C12.6319 36.8995 12.5002 36.5816 12.5002 36.2501C12.5002 35.9186 12.6319 35.6006 12.8663 35.3662C13.1007 35.1318 13.4187 35.0001 13.7502 35.0001H26.2502C26.5817 35.0001 26.8997 35.1318 27.1341 35.3662C27.3685 35.6006 27.5002 35.9186 27.5002 36.2501ZM33.7502 16.2501C33.7556 18.3339 33.2848 20.3914 32.3739 22.2656C31.4629 24.1397 30.1359 25.781 28.494 27.0641C28.1869 27.2995 27.9378 27.6019 27.7656 27.9482C27.5933 28.2946 27.5026 28.6758 27.5002 29.0626V30.0001C27.5002 30.6631 27.2368 31.299 26.768 31.7679C26.2991 32.2367 25.6632 32.5001 25.0002 32.5001H15.0002C14.3372 32.5001 13.7013 32.2367 13.2324 31.7679C12.7636 31.299 12.5002 30.6631 12.5002 30.0001V29.0626C12.4999 28.6804 12.4121 28.3033 12.2433 27.9604C12.0746 27.6175 11.8294 27.3178 11.5268 27.0845C9.88896 25.8089 8.56278 24.1775 7.64861 22.3137C6.73444 20.4499 6.25624 18.4026 6.2502 16.3266C6.20958 8.87977 12.2283 2.67821 19.669 2.50008C21.5023 2.4559 23.326 2.77892 25.0326 3.45011C26.7393 4.12131 28.2944 5.12712 29.6065 6.40835C30.9186 7.68958 31.9612 9.22034 32.6728 10.9105C33.3844 12.6007 33.7507 14.4162 33.7502 16.2501ZM25.8846 16.6157C25.7685 16.4995 25.6306 16.4073 25.4789 16.3444C25.3271 16.2815 25.1645 16.2491 25.0002 16.2491C24.8359 16.2491 24.6733 16.2815 24.5215 16.3444C24.3698 16.4073 24.2319 16.4995 24.1158 16.6157L20.0002 20.7329L15.8846 16.6157C15.65 16.3812 15.3319 16.2494 15.0002 16.2494C14.6685 16.2494 14.3504 16.3812 14.1158 16.6157C13.8813 16.8503 13.7495 17.1684 13.7495 17.5001C13.7495 17.8318 13.8813 18.1499 14.1158 18.3845L18.7502 23.0173V28.7501C18.7502 29.0816 18.8819 29.3995 19.1163 29.634C19.3507 29.8684 19.6687 30.0001 20.0002 30.0001C20.3317 30.0001 20.6497 29.8684 20.8841 29.634C21.1185 29.3995 21.2502 29.0816 21.2502 28.7501V23.0173L25.8846 18.3845C26.0008 18.2684 26.093 18.1305 26.1559 17.9788C26.2188 17.827 26.2512 17.6644 26.2512 17.5001C26.2512 17.3358 26.2188 17.1732 26.1559 17.0214C26.093 16.8697 26.0008 16.7318 25.8846 16.6157Z"
              fill="#00482F"
            />
          </svg>
        </GreenCard>
        <GreenCard className="bg-primary py-8 px-6 rounded-2xl" label="Jiangxi Factory">
          <svg className="w-[25px] split:w-10" viewBox="0 0 40 40" fill="none">
            <path
              d="M36.25 18.75H34.9469C34.8007 16.9675 34.3338 15.226 33.5687 13.6094L34.6984 12.9578C34.9856 12.7921 35.1952 12.519 35.281 12.1987C35.3669 11.8784 35.322 11.5372 35.1562 11.25C34.9905 10.9628 34.7174 10.7533 34.3972 10.6674C34.0769 10.5815 33.7356 10.6264 33.4484 10.7922L32.3156 11.4469C31.2931 9.98065 30.0194 8.70685 28.5531 7.68437L29.2078 6.55156C29.3736 6.26438 29.4185 5.92312 29.3326 5.60284C29.2467 5.28256 29.0372 5.00951 28.75 4.84375C28.4628 4.67799 28.1216 4.6331 27.8013 4.71896C27.481 4.80481 27.2079 5.01438 27.0422 5.30156L26.3906 6.43125C24.774 5.66615 23.0325 5.19929 21.25 5.05312V3.75C21.25 3.41848 21.1183 3.10054 20.8839 2.86612C20.6495 2.6317 20.3315 2.5 20 2.5C19.6685 2.5 19.3505 2.6317 19.1161 2.86612C18.8817 3.10054 18.75 3.41848 18.75 3.75V5.05312C16.9675 5.19929 15.226 5.66615 13.6094 6.43125L12.9578 5.30156C12.7921 5.01438 12.519 4.80481 12.1987 4.71896C11.8784 4.6331 11.5372 4.67799 11.25 4.84375C10.9628 5.00951 10.7533 5.28256 10.6674 5.60284C10.5815 5.92312 10.6264 6.26438 10.7922 6.55156L11.4469 7.68437C9.98065 8.70685 8.70685 9.98065 7.68437 11.4469L6.55156 10.7922C6.40937 10.7101 6.25239 10.6568 6.08961 10.6354C5.92683 10.614 5.76143 10.6249 5.60284 10.6674C5.28256 10.7533 5.00951 10.9628 4.84375 11.25C4.67799 11.5372 4.6331 11.8784 4.71896 12.1987C4.80481 12.519 5.01438 12.7921 5.30156 12.9578L6.43125 13.6094C5.66615 15.226 5.19929 16.9675 5.05312 18.75H3.75C3.41848 18.75 3.10054 18.8817 2.86612 19.1161C2.6317 19.3505 2.5 19.6685 2.5 20C2.5 20.3315 2.6317 20.6495 2.86612 20.8839C3.10054 21.1183 3.41848 21.25 3.75 21.25H5.05312C5.19929 23.0325 5.66615 24.774 6.43125 26.3906L5.30156 27.0422C5.06312 27.1797 4.87674 27.3921 4.77134 27.6464C4.66594 27.9007 4.64742 28.1826 4.71866 28.4485C4.78989 28.7144 4.9469 28.9493 5.1653 29.1168C5.38371 29.2844 5.6513 29.3751 5.92656 29.375C6.14604 29.3757 6.36174 29.318 6.55156 29.2078L7.68437 28.5531C8.70685 30.0194 9.98065 31.2931 11.4469 32.3156L10.7922 33.4484C10.6264 33.7356 10.5815 34.0769 10.6674 34.3972C10.7533 34.7174 10.9628 34.9905 11.25 35.1562C11.5372 35.322 11.8784 35.3669 12.1987 35.281C12.519 35.1952 12.7921 34.9856 12.9578 34.6984L13.6094 33.5687C15.226 34.3338 16.9675 34.8007 18.75 34.9469V36.25C18.75 36.5815 18.8817 36.8995 19.1161 37.1339C19.3505 37.3683 19.6685 37.5 20 37.5C20.3315 37.5 20.6495 37.3683 20.8839 37.1339C21.1183 36.8995 21.25 36.5815 21.25 36.25V34.9469C23.0325 34.8007 24.774 34.3338 26.3906 33.5687L27.0422 34.6984C27.2079 34.9856 27.481 35.1952 27.8013 35.281C28.1216 35.3669 28.4628 35.322 28.75 35.1562C29.0372 34.9905 29.2467 34.7174 29.3326 34.3972C29.4185 34.0769 29.3736 33.7356 29.2078 33.4484L28.5531 32.3156C30.0194 31.2931 31.2931 30.0194 32.3156 28.5531L33.4484 29.2078C33.5906 29.2899 33.7476 29.3432 33.9104 29.3646C34.0732 29.3861 34.2386 29.3752 34.3972 29.3327C34.5558 29.2902 34.7044 29.2168 34.8347 29.1169C34.9649 29.0169 35.0742 28.8922 35.1562 28.75C35.3222 28.463 35.3674 28.1219 35.2818 27.8016C35.1962 27.4813 34.987 27.2082 34.7 27.0422L33.5703 26.3906C34.3354 24.774 34.8023 23.0325 34.9484 21.25H36.25C36.5815 21.25 36.8995 21.1183 37.1339 20.8839C37.3683 20.6495 37.5 20.3315 37.5 20C37.5 19.6685 37.3683 19.3505 37.1339 19.1161C36.8995 18.8817 36.5815 18.75 36.25 18.75ZM11.25 20C11.2494 18.6758 11.5498 17.3688 12.1285 16.1777C12.7072 14.9867 13.5492 13.9428 14.5906 13.125L18.5562 20L14.5906 26.875C13.5492 26.0572 12.7072 25.0133 12.1285 23.8223C11.5498 22.6312 11.2494 21.3242 11.25 20ZM20 28.75C18.8877 28.7512 17.7855 28.539 16.7531 28.125L20.7219 21.25H28.6594C28.356 23.3311 27.3144 25.2338 25.7247 26.6107C24.135 27.9876 22.1031 28.7469 20 28.75ZM20.7219 18.75L16.7531 11.875C17.9822 11.384 19.3067 11.1782 20.6269 11.2731C21.947 11.3681 23.2284 11.7613 24.3746 12.4231C25.5208 13.085 26.502 13.9982 27.2441 15.0941C27.9863 16.19 28.4702 17.44 28.6594 18.75H20.7219Z"
              fill="#00482F"
            />
          </svg>
        </GreenCard>
      </div>

      <AboutUsSection />

      <section className="contentMargin py-7 split:py-20 space-y-6">
        <div className="split:flex space-y-4 justify-between mb-6 items-center">
          <SubHeading>Our Products</SubHeading>
          <Button href="">See Our Gallery</Button>
        </div>
        <ProductSegmentation title="Solar Panels">
          <div className="grid grid-cols-1 split:grid-cols-3 gap-6">
            <Product
              className="col-span-1"
              image={solar1}
              alt="Solar Panels products one"
              title="400W solar Panels"
              category="Solar Powered Fans"
              imgCln="sm:px-[55px]"
            />
            <Product
              className="col-span-1"
              image={solar2}
              alt="Solar Panels products one"
              title="600W Solar Panels"
              category="Solar Powered Fans"
              imgCln="sm:px-[55px]"
            />
            <Product
              className="col-span-1"
              image={solar3}
              alt="Solar Panels products one"
              title="800W Solar Panels"
              category="Solar Powered Fans"
              imgCln="sm:px-[55px]"
            />
          </div>
        </ProductSegmentation>

        <ProductSegmentation title="Solar Powered Fans">
          <div className="grid grid-cols-1 split:grid-cols-3 gap-6">
            <Product
              className="col-span-1"
              image={solarfan1}
              alt="Solar Panels products one"
              title={'16" DC/AC Solar Fan'}
              category="Solar Powered Fans"
            />
            <Product
              className="col-span-1"
              image={solarfan2}
              alt="Solar Panels products one"
              title={'16" Solar Fan, 12v4AH Battery'}
              category="Solar Powered Fans"
            />
            <Product
              className="col-span-1"
              image={solarfan3}
              alt="Solar Panels products one"
              title={'16" Remote Control fan, 11.1v4H Battery'}
              category="Solar Powered Fans"
            />
          </div>
        </ProductSegmentation>
      </section>
      <section className="contentMargin bg-primary py-[120px] space-y-10">
        <SubHeading className="text-white">How It Works</SubHeading>
        <div className="gap-x-6 max-split:space-y-6 split:flex">
          <div className="bg-white rounded-2xl py-12 px-8 space-y-4">
            <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.78418" width="65" height="65" rx="32.5" fill="#F0FDF6" />
              <path
                d="M37.5782 31.2527C37.5782 32.6588 37.1612 34.0334 36.38 35.2025C35.5988 36.3716 34.4885 37.2829 33.1894 37.821C31.8904 38.359 30.4609 38.4998 29.0818 38.2255C27.7027 37.9512 26.436 37.2741 25.4417 36.2798C24.4474 35.2856 23.7703 34.0188 23.496 32.6397C23.2217 31.2606 23.3625 29.8312 23.9006 28.5321C24.4387 27.233 25.3499 26.1227 26.519 25.3415C27.6882 24.5603 29.0627 24.1434 30.4688 24.1434C32.3543 24.1434 34.1626 24.8924 35.4959 26.2257C36.8291 27.5589 37.5782 29.3672 37.5782 31.2527ZM45.4061 46.19C45.3118 46.2845 45.1998 46.3594 45.0765 46.4105C44.9532 46.4616 44.821 46.4879 44.6875 46.4879C44.5541 46.4879 44.4219 46.4616 44.2986 46.4105C44.1753 46.3594 44.0633 46.2845 43.969 46.19L37.6137 39.8335C35.4036 41.6722 32.5697 42.588 29.7016 42.3906C26.8334 42.1932 24.1518 40.8977 22.2144 38.7735C20.2771 36.6494 19.2332 33.8601 19.2999 30.9859C19.3666 28.1117 20.5387 25.3739 22.5725 23.3419C24.6063 21.3099 27.3452 20.1402 30.2194 20.076C33.0937 20.0119 35.882 21.0582 38.0044 22.9974C40.1269 24.9367 41.42 27.6194 41.6149 30.4878C41.8098 33.3561 40.8914 36.1892 39.0508 38.3977L45.4061 44.7529C45.5005 44.8473 45.5754 44.9593 45.6265 45.0826C45.6777 45.2059 45.704 45.338 45.704 45.4715C45.704 45.605 45.6777 45.7371 45.6265 45.8604C45.5754 45.9837 45.5005 46.0957 45.4061 46.19ZM30.4688 40.3934C32.2766 40.3934 34.0439 39.8573 35.547 38.8529C37.0502 37.8485 38.2218 36.4209 38.9136 34.7507C39.6055 33.0805 39.7865 31.2426 39.4338 29.4695C39.0811 27.6964 38.2105 26.0677 36.9322 24.7893C35.6538 23.511 34.0251 22.6404 32.252 22.2878C30.4789 21.9351 28.6411 22.1161 26.9708 22.8079C25.3006 23.4997 23.873 24.6713 22.8686 26.1745C21.8643 27.6777 21.3282 29.4449 21.3282 31.2527C21.3309 33.6762 22.2947 35.9996 24.0084 37.7132C25.722 39.4268 28.0454 40.3907 30.4688 40.3934Z"
                fill="#00482F"
              />
            </svg>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Browse our products</h3>
              <span className="text-sm">
                Explore our full range of solar products — from batteries to inverters — or speak with our team for expert advice.
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl py-12 px-8 space-y-4">
            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.333374" y="0.78418" width="65" height="65" rx="32.5" fill="#F0FDF6" />
              <path
                d="M32.8334 20.0811C30.222 20.0811 27.6694 20.8554 25.4981 22.3062C23.3269 23.757 21.6346 25.819 20.6353 28.2316C19.636 30.6441 19.3745 33.2988 19.8839 35.86C20.3934 38.4211 21.6509 40.7737 23.4974 42.6202C25.3439 44.4667 27.6964 45.7242 30.2576 46.2336C32.8187 46.7431 35.4734 46.4816 37.886 45.4823C40.2986 44.483 42.3606 42.7907 43.8114 40.6194C45.2622 38.4482 46.0365 35.8955 46.0365 33.2842C46.0328 29.7836 44.6406 26.4275 42.1653 23.9522C39.6901 21.477 36.3339 20.0848 32.8334 20.0811ZM38.6301 30.9559L31.5207 38.0652C31.4264 38.1597 31.3143 38.2346 31.1911 38.2857C31.0678 38.3368 30.9356 38.3631 30.8021 38.3631C30.6687 38.3631 30.5365 38.3368 30.4132 38.2857C30.2899 38.2346 30.1779 38.1597 30.0836 38.0652L27.0367 35.0184C26.8461 34.8278 26.7391 34.5693 26.7391 34.2998C26.7391 34.0303 26.8461 33.7718 27.0367 33.5812C27.2273 33.3907 27.4857 33.2836 27.7553 33.2836C28.0248 33.2836 28.2832 33.3907 28.4738 33.5812L30.8021 35.9108L37.1929 29.5187C37.2873 29.4244 37.3993 29.3495 37.5226 29.2985C37.6459 29.2474 37.7781 29.2211 37.9115 29.2211C38.045 29.2211 38.1771 29.2474 38.3004 29.2985C38.4237 29.3495 38.5357 29.4244 38.6301 29.5187C38.7244 29.6131 38.7993 29.7251 38.8503 29.8484C38.9014 29.9717 38.9277 30.1039 38.9277 30.2373C38.9277 30.3708 38.9014 30.5029 38.8503 30.6262C38.7993 30.7495 38.7244 30.8615 38.6301 30.9559Z"
                fill="#00482F"
              />
            </svg>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Choose the best solution</h3>
              <span className="text-sm">Select the products that fit your energy needs, whether for home, business, or off-grid living.</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl py-12 px-8 space-y-4">
            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.666626" y="0.78418" width="65" height="65" rx="32.5" fill="#F0FDF6" />
              <path
                d="M45.3135 25.4316L34.1416 19.3188C33.8431 19.1539 33.5077 19.0674 33.1666 19.0674C32.8256 19.0674 32.4901 19.1539 32.1916 19.3188L21.0198 25.4342C20.7007 25.6087 20.4344 25.8658 20.2486 26.1784C20.0628 26.491 19.9643 26.8478 19.9635 27.2115V39.3533C19.9643 39.717 20.0628 40.0738 20.2486 40.3864C20.4344 40.6991 20.7007 40.9561 21.0198 41.1306L32.1916 47.246C32.4901 47.4109 32.8256 47.4974 33.1666 47.4974C33.5077 47.4974 33.8431 47.4109 34.1416 47.246L45.3135 41.1306C45.6325 40.9561 45.8989 40.6991 46.0847 40.3864C46.2705 40.0738 46.3689 39.717 46.3698 39.3533V27.2128C46.3696 26.8484 46.2715 26.4909 46.0856 26.1775C45.8998 25.8641 45.6331 25.6065 45.3135 25.4316ZM33.1666 21.0962L43.3673 26.6821L39.5866 28.7502L29.386 23.1642L33.1666 21.0962ZM33.1666 32.2681L22.9659 26.6821L27.2709 24.3246L37.4716 29.9105L33.1666 32.2681ZM44.3385 39.3584L34.1823 44.9177V34.0238L38.2448 31.8009V36.3306C38.2448 36.5999 38.3518 36.8582 38.5422 37.0487C38.7327 37.2392 38.991 37.3462 39.2604 37.3462C39.5297 37.3462 39.7881 37.2392 39.9785 37.0487C40.169 36.8582 40.276 36.5999 40.276 36.3306V30.6888L44.3385 28.4658V39.3533V39.3584Z"
                fill="#00482F"
              />
            </svg>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Delivery and/or installation</h3>
              <span className="text-sm">We deliver your solar products quickly, with optional professional installation support if needed.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contentMargin py-16">
        <SubHeading>A Sneak Peak into Jcns Factory</SubHeading>
      </section>

      <section className="contentMargin py-16 space-y-10">
        <SubHeading>What our customers say about us</SubHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomerReview image="#">
            <div className="grow-1 space-y-4">
              <div className="text-sm">
                <h5 className="font-bold">David Tunde</h5>
                <p className="text-xs">Business man</p>
              </div>

              <div className="text-md/[180%] font-medium italic text-white">
                “Switching to solar with Jolar was one of the best decisions we made for our home. The battery and inverter we bought were top-notch,
                and the team made the process super easy.”
              </div>

              <div className="flex gap-x-3">
                <div className="flex">
                  <FullStar />
                  <FullStar />
                  <FullStar />
                  <FullStar />
                  <HalfStar />
                </div>
                <p className="text-[18px] text-white">4.5</p>
              </div>
            </div>
          </CustomerReview>
          <CustomerReview image="#">
            <div className="grow-1 space-y-4">
              <div className="text-sm">
                <h5 className="font-bold">Amaka Okon</h5>
                <p className="text-xs">Home Owner</p>
              </div>

              <div className="text-md/[180%] font-medium italic text-white">
                “As a business owner, finding reliable solar products was critical.Jcns Solar delivered exactly what we needed — high-quality panels,
                batteries, and backup systems.”
              </div>

              <div className="flex gap-x-3">
                <div className="flex">
                  <FullStar />
                  <FullStar />
                  <FullStar />
                  <FullStar />
                  <HalfStar />
                </div>
                <p className="text-[18px] text-white">4.5</p>
              </div>
            </div>
          </CustomerReview>
        </div>
      </section>

      <section className="contentMargin py-12">
        <FaqQuestions />
      </section>
      <section className="contentMargin py-12">
        <ContactUsSection />
      </section>
    </>
  );
}
