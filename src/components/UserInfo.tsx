import Image from "next/image";

const UserInfo = ({
  src,
  alt = "",
  userInfo,
  highlighted,
}: {
  src: string;
  alt?: string;
  userInfo: string;
  highlighted: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={src} alt={alt} width={16} height={16} />
      <span>
        {userInfo}
        <b className="cursor-pointer">{highlighted}</b>
      </span>
    </div>
  );
};

export default UserInfo;
