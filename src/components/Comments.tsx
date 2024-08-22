import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4 my-4">
        <Image
          src="https://images.pexels.com/photos/26832674/pexels-photo-26832674/free-photo-of-swa-view-photo-print.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between w-full gap-2 px-6 py-2 bg-slate-100 rounded-xl">
          <input
            type="text"
            placeholder="write a comment..."
            className="outline-none bg-transparent flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 rounded-full"
          />
        </div>
      </div>
      <div className="flex gap-4">
        {/*  */}
        <div className="min-w-max">
          <Image
            src="https://images.pexels.com/photos/18233419/pexels-photo-18233419/free-photo-of-a-building-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 font-medium">
          <span>Willem van Westreenen</span>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus
            in voluptatum aliquid! Recusandae accusamus cupiditate, dicta quam
            odit perferendis. Doloribus non architecto quod facilis tenetur
            rerum, minus libero similique.
          </div>
          <div className="flex gap-8 items-center">
            <div className="py-2 flex gap-4 items-center text-gray-500 text-sm font-medium justify-center">
              <Image
                src="/like.png"
                alt=""
                width={12}
                height={12}
                className="w-3 h-3 cursor-pointer"
              />
              <div className="text-gray-300">|</div>
              <div className="text-gray-500">123 Likes</div>
            </div>
            <div className="text-gray-500 text-sm cursor-pointer">Reply</div>
          </div>
        </div>
        <div>
          <Image
            src="/more.png"
            alt="more"
            width={48}
            height={32}
            className="w-12 h-8 object-contain cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
