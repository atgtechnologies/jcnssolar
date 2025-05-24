import Product from "../components/products/product";
import ProductSegmentation from "../components/products/Segmentation";
import solar1 from "@/app/components/images/panel 1.png";
import solar2 from "@/app/components/images/panel 21.png";
import solar3 from "@/app/components/images/panel 31.png";
import solarfan1 from "@/app/components/images/solar fan 1.png";
import solarfan2 from "@/app/components/images/solar fan 2.png";
import solarfan3 from "@/app/components/images/solar fan 4.png";
import solarfan4 from "@/app/components/images/solar fan 5.png";
import solarfan5 from "@/app/components/images/solar fan 6.png";
import lighting1 from "@/app/components/images/lighting 1.png";
import lighting2 from "@/app/components/images/lighting 2.png";
import lighting3 from "@/app/components/images/lighting 3.png";
import lighting4 from "@/app/components/images/lighting 4.png";
import lighting5 from "@/app/components/images/lighting 5.png";
import energy1 from "@/app/components/images/energy 1.png";
import energy2 from "@/app/components/images/energy 2.png";
import energy3 from "@/app/components/images/energy 3.png";
import energy4 from "@/app/components/images/energy 4.png";
import energy5 from "@/app/components/images/energy 5.png";
import energy6 from "@/app/components/images/energy 6.png";
import inverter1 from "@/app/components/images/inverter 1.png";
import inverter2 from "@/app/components/images/Inverter 2.png";
import inverter3 from "@/app/components/images/Inverter 3.png";
import inverter4 from "@/app/components/images/Inverter 4.png";
import inverter5 from "@/app/components/images/Inverter 5.png";
import inverter6 from "@/app/components/images/inverter 6.png";
import generator1 from "@/app/components/images/300w-generator.jpg";
import generator2 from "@/app/components/images/500w-generator.jpg";
import SubHeading from "../components/subheading";
import { cardVariants, fadeInViewportFxn, StaggerParent } from "../components/framer-constants";

export const metadata = {
  title: "Solar Products in Nigeria | Buy Inverters, Panels & Kits - JCNS Solar Solutions",
  description:
    "Explore our wide range of solar products in Nigeria: inverters, solar panels, batteries, and complete solar kits for homes and businesses. Quality, affordable, and reliable solar solutions from JCNS Solar Solutions.",
};

const Products = () => {
  return (
    <div className="space-y-8 contentMargin">
      <SubHeading>Our Product Gallery</SubHeading>

      <ProductSegmentation id="panels" title="Solar Panels">
        <div className="grid grid-cols-1 split:grid-cols-3 gap-6">
          <Product
            {...fadeInViewportFxn(0)}
            className="col-span-1"
            image={solar1}
            title="400W solar Panels"
            category="Solar Panels"
            imgCln="sm:px-[55px]"
          />
          <Product
            {...fadeInViewportFxn(0.2)}
            className="col-span-1"
            image={solar2}
            title="680W Solar Panels"
            category="Solar Panels"
            imgCln="sm:px-[55px]"
          />
        </div>
      </ProductSegmentation>

      <ProductSegmentation id="fans" title="Solar Powered Fans">
        <div className="grid grid-cols-1 split:grid-cols-3 gap-6">
          <Product {...fadeInViewportFxn(0)} className="col-span-1" image={solarfan1} title={'16" DC/AC Solar Fan'} category="Solar Powered Fans" />
          <Product
            {...fadeInViewportFxn(0.2)}
            className="col-span-1"
            image={solarfan2}
            title={'16" Solar Fan, 12v4AH Battery'}
            category="Solar Powered Fans"
          />
          <Product
            {...fadeInViewportFxn(0.4)}
            className="col-span-1"
            image={solarfan3}
            title={'16" Remote Control fan, 11.1v4H Battery'}
            category="Solar Powered Fans"
          />
          <Product
            {...fadeInViewportFxn(0.1)}
            className="col-span-1"
            image={solarfan4}
            title={'12" Solar fan, 9v4AH'}
            category="Solar Powered Fans"
          />
          <Product
            {...fadeInViewportFxn(0.3)}
            className="col-span-1"
            image={solarfan5}
            title={'18"Solar fan, 12.1v4AH'}
            category="Solar Powered Fans"
          />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Solar Powered Home Lighting Systems">
        <div className="grid grid-cols-1 split:grid-cols-3 gap-6">
          <Product {...fadeInViewportFxn(0)} className="col-span-1" image={lighting1} title="Speaker System" category="Home Lighting Systems" />
          <Product {...fadeInViewportFxn(0.2)} className="col-span-1" image={lighting2} title="Solar Home System" category="Home Lighting Systems" />
          <Product
            {...fadeInViewportFxn(0.4)}
            className="col-span-1"
            image={lighting3}
            title="Lighting Speaker MP3/FM"
            category="Home Lighting Systems"
          />
          <Product
            {...fadeInViewportFxn(0.1)}
            className="col-span-1"
            image={lighting4}
            title="Lighting Speaker MP3/FM"
            category="Home Lighting Systems"
          />
          <Product
            {...fadeInViewportFxn(0.3)}
            className="col-span-1"
            image={lighting5}
            title="Lighting Speaker MP3/FM"
            category="Home Lighting Systems"
          />
        </div>
      </ProductSegmentation>

      <ProductSegmentation id="storage" title="Solar Energy Storage Systems">
        <div className="grid grid-cols-1 split:grid-cols-3 gap-6">
          <Product {...fadeInViewportFxn(0)} className="col-span-1" image={energy1} title="15Kwh po4 Battery " category="Energy Storage System" />
          <Product {...fadeInViewportFxn(0.2)} className="col-span-1" image={energy2} title="Solar Inverter" category="Energy Storage System" />
          <Product {...fadeInViewportFxn(0.4)} className="col-span-1" image={energy3} title="15Kwh po4 Battery " category="Energy Storage System" />
          <Product
            {...fadeInViewportFxn(0.1)}
            className="col-span-1"
            image={energy4}
            title="Stackable 15Kwh Battery "
            category="Energy Storage System"
          />
          <Product
            {...fadeInViewportFxn(0.3)}
            className="col-span-1"
            image={energy5}
            title="Stackable 15Kwh Battery "
            category="Energy Storage System"
          />
          <Product
            {...fadeInViewportFxn(0.5)}
            className="col-span-1"
            image={energy6}
            title="Solar Storage Battery"
            category="Energy Storage System"
          />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Small Inverter Series" id="inverters">
        <div className="grid grid-cols-1 split:grid-cols-3 gap-6">
          <Product
            {...fadeInViewportFxn(0)}
            className="col-span-1"
            image={inverter1}
            title="12-48v/2000w Inverter"
            category="Small Inverter Series"
          />
          <Product
            {...fadeInViewportFxn(0.2)}
            className="col-span-1"
            image={inverter2}
            title="12v/500-2000w Inverter"
            category="Small Inverter Series"
          />
          <Product
            {...fadeInViewportFxn(0.4)}
            className="col-span-1"
            image={inverter3}
            title="800w, 1300w and 1800w Inverter"
            category="Small Inverter Series"
          />
          <Product {...fadeInViewportFxn(0.1)} className="col-span-1" image={inverter4} title="12v/500w Inverter" category="Small Inverter Series" />
          <Product
            {...fadeInViewportFxn(0.2)}
            className="col-span-1"
            image={inverter5}
            title="500w-2000w Inverter"
            category="Small Inverter Series"
          />
          <Product
            {...fadeInViewportFxn(0.4)}
            className="col-span-1"
            image={inverter6}
            title="500w-2000w Inverter"
            category="Small Inverter Series"
          />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Solar Generators" id="generators">
        <div className="grid grid-cols-1 split:grid-cols-3 gap-6">
          {/* <Product
            {...fadeInViewportFxn(0.2)}
            className="col-span-1"
            image={generator}
            title="12-48v/2000w Inverter"
            category="Solar Genrators"
          /> */}
          <Product {...fadeInViewportFxn(0)} className="col-span-1" image={generator1} title="12-48v/2000w Inverter" category="Solar Genrators" />
          <Product {...fadeInViewportFxn(0.2)} className="col-span-1" image={generator2} title="12-48v/2000w Inverter" category="Solar Genrators" />
        </div>
      </ProductSegmentation>
    </div>
  );
};

export default Products;
