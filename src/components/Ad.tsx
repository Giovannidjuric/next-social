import Image from "next/image";

const Ad = ({ size = "md" }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored</span>
        <Image
          src="/more.png"
          alt=""
          width={20}
          height={20}
          className="w-5 h-5 cursor-pointer"
        />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2 " : "gap-4"}`}
      >
        <div
          className={`${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          } w-full relative`}
        >
          <Image
            src="https://images.pexels.com/photos/27244362/pexels-photo-27244362/free-photo-of-lakes-viti-and-oskjuvatn-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="ad"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27244362/pexels-photo-27244362/free-photo-of-lakes-viti-and-oskjuvatn-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-blue-500 font-medium">Dragonball Lounge</span>
        </div>
        <div className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
          <p>
            {size === "sm"
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit"
              : size === "md"
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti, quas pariatur animi expedita"
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti, quas pariatur animi expedita ratione reprehenderit quis repellendus non modi voluptates quaerat, harum aspernatur? Ut ipsa unde beatae omnis similique!"}
          </p>
        </div>
        <button
          className={`bg-slate-200 rounded-lg text-center text-sm px-1 py-1 text-gray-500`}
        >
          <span>Learn more</span>
        </button>
      </div>
    </div>
  );
};

export default Ad;
