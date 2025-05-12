import InputElement from "../components/inputElement";

const Contact = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-[36px] text-neutral-100 font-bold ">Contact Us </h1>
      <div className="md:flex max-md:contents">
        <div></div>
        <div>
          <h3 className="text-[30px] font-bold">Contact Information</h3>
          <small>Get in touch</small>

          <form action="" method="post" className="mt-10 space-y-[45px]">
            <InputElement label="First name" type="text" placeholder="John" />
            <InputElement label="Last name" type="text" placeholder="Wick" />
            <InputElement label="Email address" type="email" placeholder="johnwick@gmail.com" />
            <InputElement label="Phone number" type="number" placeholder="08099887766" />
            <InputElement label="Message" type="text" placeholder="Please type here" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
