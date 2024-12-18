import Button from "./button";

export default function Navbar() {
  return (
    // <div className="flex w-[full] h-[400px] border-black border-2 bg-blue-950 gap-y-2">
    //   <nav className="flex flex-row gap-x-[100px] justify-center items-center h-[40px] ">
    //     <h1 className="flex text-center font-bold border-black border-2">
    //       Finsweet
    //     </h1>
    //     <ul className="flex gap-7 ">
    //       <li>Home</li>
    //       <li>About us</li>
    //       <li>Features</li>
    //       <li>Pricing</li>
    //       <li>FAQ</li>
    //       <li>Blog</li>
    //     </ul>
    //     <button className=" text-white bg-blue px-6 py-[10px] rounded-full justify-center items-center ">
    //       Contact us
    //     </button>
    //   </nav>
    // </div>
    <div className="flex">
      <div className="flex justify-around w-full h-fit items-center py-5 px-8 text-white border-2">
        <div className="font-bold">Finsweet</div>
        <div className="flex gap-x-4 w-fit items-center ">
          <p>Home</p>
          <p>About us</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>FAQ</p>
          <p>Blog</p>
          <Button text="Contact US" isOutLine/>
          {/* <button className="flex px-2 py-1 border rounded-xl border-lime-100 ml-6">
            Contact us
          </button> */}
        </div>
      </div>
    </div>
  );
};

