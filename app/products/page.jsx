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
import SubHeading from "../components/subheading";

const Products = () => {
  return (
    <div className="space-y-8 contentMargin">
      <SubHeading>Our Product Gallery</SubHeading>

      <ProductSegmentation title="Solar Panels">
        <div className="flex flex-wrap gap-4">
          <Product
            className=""
            image={solar1}
            alt="Solar Panels products one"
            title="400W solar Panels"
            category="Solar Powered Fans"
            imgCln="sm:px-[55px]"
          />
          <Product
            className=""
            image={solar2}
            alt="Solar Panels products one"
            title="600W Solar Panels"
            category="Solar Powered Fans"
            imgCln="sm:px-[55px]"
          />
          <Product
            className=""
            image={solar3}
            alt="Solar Panels products one"
            title="800W Solar Panels"
            category="Solar Powered Fans"
            imgCln="sm:px-[55px]"
          />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Solar Powered Fans">
        <div className="flex flex-wrap gap-4">
          <Product
            className="basis-auto"
            image={solarfan1}
            alt="Solar Panels products one"
            title={'16" DC/AC Solar Fan'}
            category="Solar Powered Fans"
          />
          <Product
            className="basis-auto"
            image={solarfan2}
            alt="Solar Panels products one"
            title={'16" Solar Fan, 12v4AH Battery'}
            category="Solar Powered Fans"
          />
          <Product
            className="basis-auto"
            image={solarfan3}
            alt="Solar Panels products one"
            title={'16" Remote Control fan, 11.1v4H Battery'}
            category="Solar Powered Fans"
          />
          <Product
            className="basis-auto"
            image={solarfan4}
            alt="Solar Panels products one"
            title={'12" Solar fan, 9v4AH'}
            category="Solar Powered Fans"
          />
          <Product
            className="basis-auto"
            image={solarfan5}
            alt="Solar Panels products one"
            title={'18"Solar fan, 12.1v4AH'}
            category="Solar Powered Fans"
          />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Solar Powered Home Lighting Systems">
        <div className="flex flex-wrap gap-4">
          <Product className="basis-auto" image={lighting1} alt="Solar Panels products one" title="Speaker System" category="Home Lighting Systems" />
          <Product
            className="basis-auto"
            image={lighting2}
            alt="Solar Panels products one"
            title="Solar Home System"
            category="Home Lighting Systems"
          />
          <Product
            className="basis-auto"
            image={lighting3}
            alt="Solar Panels products one"
            title="Lighting Speaker MP3/FM"
            category="Home Lighting Systems"
          />
          <Product
            className="basis-auto"
            image={lighting4}
            alt="Solar Panels products one"
            title="Lighting Speaker MP3/FM"
            category="Home Lighting Systems"
          />
          <Product
            className="basis-auto"
            image={lighting5}
            alt="Solar Panels products one"
            title="Lighting Speaker MP3/FM"
            category="Home Lighting Systems"
          />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Solar Energy Storage Systems">
        <div className="flex flex-wrap gap-4">
          <Product
            className="basis-auto"
            image={energy1}
            alt="Solar Panels products one"
            title="15Kwh po4 Battery "
            category="Energy Storage System"
          />
          <Product className="basis-auto" image={energy2} alt="Solar Panels products one" title="Solar Inverter" category="Energy Storage System" />
          <Product
            className="basis-auto"
            image={energy3}
            alt="Solar Panels products one"
            title="15Kwh po4 Battery "
            category="Energy Storage System"
          />
          <Product
            className="basis-auto"
            image={energy4}
            alt="Solar Panels products one"
            title="Stackable 15Kwh Battery "
            category="Energy Storage System"
          />
          <Product
            className="basis-auto"
            image={energy5}
            alt="Solar Panels products one"
            title="Stackable 15Kwh Battery "
            category="Energy Storage System"
          />
          <Product
            className="basis-auto"
            image={energy6}
            alt="Solar Panels products one"
            title="Solar Storage Battery"
            category="Energy Storage System"
          />
        </div>
      </ProductSegmentation>

      <ProductSegmentation title="Small Inverter Series">
        <div className="flex flex-wrap gap-4">
          <Product
            className="basis-auto"
            image={inverter1}
            alt="Solar Panels products one"
            title="12-48v/2000w Inverter"
            category="Small Inverter Series"
          />
          <Product
            className="basis-auto"
            image={inverter2}
            alt="Solar Panels products one"
            title="12v/500-2000w Inverter"
            category="Small Inverter Series"
          />
          <Product
            className="basis-auto"
            image={inverter3}
            alt="Solar Panels products one"
            title="800w, 1300w and 1800w Inverter"
            category="Small Inverter Series"
          />
          <Product
            className="basis-auto"
            image={inverter4}
            alt="Solar Panels products one"
            title="12v/500w Inverter"
            category="Small Inverter Series"
          />
          <Product
            className="basis-auto"
            image={inverter5}
            alt="Solar Panels products one"
            title="500w-2000w Inverter"
            category="Small Inverter Series"
          />
          <Product
            className="basis-auto"
            image={inverter6}
            alt="Solar Panels products one"
            title="500w-2000w Inverter"
            category="Small Inverter Series"
          />
        </div>
      </ProductSegmentation>
    </div>
  );
};

export default Products;
