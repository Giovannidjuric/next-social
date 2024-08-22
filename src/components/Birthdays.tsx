import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="bg-white rounded-lg flex gap-4 flex-col p-4 shadow-lg">
      <span className="text-gray-500 text-sm font-semibold justify-between">
        Birthdays
      </span>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 justify-between">
          <Image
            src="https://images.pexels.com/photos/20410939/pexels-photo-20410939/free-photo-of-surface-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-semibold">Mirrirot Akkinor</span>
        </div>
        <button className="bg-blue-500 text-sm text-white rounded-lg px-2 py-1 hover:ring-1 hover:ring-black transition-all ease-out">
          Celebrate
        </button>
      </div>
      <div className="rounded-lg bg-slate-100 flex items-center gap-4 p-4">
        <Image
          src="/gift.png"
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 rounded-full"
        />
        <Link href="" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-00">Upcoming Birthdays</span>
          <span className="text-gray-700">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
