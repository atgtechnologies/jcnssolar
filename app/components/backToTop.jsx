"use client";
const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <span onClick={scrollToTop} className="abolute top-[-25px] left-1/2 translate-x-[-50%] absolute">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none">
        <circle cx="25" cy="25.3506" r="23" fill="white" stroke="#00482F" strokeWidth="4" />
        <path d="M31.25 30.3506L25 24.1006L18.75 30.3506L16.25 29.1006L25 20.3506L33.75 29.1006L31.25 30.3506Z" fill="#00482F" />
      </svg>
    </span>
  );
};

export default BackToTop;
