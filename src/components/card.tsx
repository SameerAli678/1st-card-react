import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import Image from "next/image";

interface CardProps {
  name: string;
  image: string;
  likes: string;
  share: string;
  comments: string;
  designation: string;
}

const Card = ({
  image,
  name,
  designation,
  comments,
  likes,
  share,
}: CardProps) => {
  return (
    <div className="rounded-2xl shadow-xl w-[400px]  mx-auto">
      <div className="bg-blue rounded-t-xl h-20 w-full flex items-end relative justify-center">
        <div className="rounded-full relative border-blue top-6 size-20 border-2">
          <Image
            src={image}
            className="border-2 object-cover rounded-full"
            alt=""
            fill
          />
        </div>
      </div>
      <div className="w-full bg-white flex flex-col gap-y-3 rounded-b-xl pb-6 pt-10">
        <h1 className="text-center font-bold text-xl">{name}</h1>
        <p className="text-center font-medium">{designation}</p>

        <div className="flex justify-center gap-x-[10px] ">
          <FaFacebook className="text-blue" />
          <AiFillTwitterCircle className="text-blue" />
          <AiFillInstagram className="text-[#C13584]	" />
          <IoLogoYoutube className="rounded-full text-rose-800	" />
        </div>

        <div className="flex justify-center items-center gap-x-5">
          <button className="text-white bg-blue px-6 py-1 rounded-full ">
            Subscribe
          </button>
          <button className="text-white bg-blue px-6 py-1 rounded-full">
            Message
          </button>
        </div>
        <div className="flex justify-center gap-x-[25px] divide-x-2 divide-black">
          <div className="flex items-center gap-x-2">
            <CiHeart />
            <div>{likes}</div>
          </div>
          <div className="flex items-center gap-x-2 pl-2">
            <FaRegComment />
            <div>{comments}</div>
          </div>
          <div className="flex items-center gap-x-2 pl-2">
            <RiShareForwardLine />
            <div>{share}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
