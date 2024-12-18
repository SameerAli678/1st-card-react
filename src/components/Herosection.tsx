import Button from "./button";

export default function HeroSection() {
  return (
    <div>
      <div className="flex flex-col border border-black h-[full] w-[full]   m-auto mt-3 ">
        <p className="font-bold ms-[80px] mt-14  text-white text-[30px] ">
          Building stellar
          <br /> websites for early <br /> startups
        </p>
        <p className="flex ms-[80px] text-white">
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt.
        </p>
        <div>
          <Button text="View our work" className="w-fit ms-20 mt-5  " />
          <Button text="view pricing"  isOutLine className="text-white border-none "/>
        </div>
      </div>
      <div></div>
    </div>
  );
}
