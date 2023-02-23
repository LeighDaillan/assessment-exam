import Image from "next/image";
import Userphoto from "../public/userphoto.png";

const Card = function ({ manager }) {
  return (
    <div className="border px-9 py-5 flex shadow-lg">
      <div>
        <Image
          className="w-auto h-auto"
          src={Userphoto}
          width={70}
          height={60}
          alt="User Photo"
          priority={true}
        />
      </div>
      <div className="ml-8">
        <h2 className="text-2xl font-bold my-2">{manager.name}</h2>
        <p className="text-sm">
          Email: <span className="font-bold">{manager.email}</span>
        </p>
        <p className="text-sm">
          Mobile:{" "}
          <span className="font-bold">{manager.phone.split(" ")[0]}</span>
        </p>
        <p className="text-sm">
          Company: <span className="font-bold">{manager.company}</span>
        </p>
        <p className="text-sm">
          Address: <span className="font-bold">{manager.address.city}</span>
        </p>
        <p className="text-sm">
          Website: <span className="font-bold">{manager.website}</span>
        </p>
        <p className="text-sm">
          Age: <span className="font-bold">{manager.age}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
