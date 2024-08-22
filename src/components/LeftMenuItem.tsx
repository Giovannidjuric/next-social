import Image from "next/image";
import Link from "next/link";

type LeftMenuItemProps = {
  src: string;
  alt: string;
  itemText: string;
};

const LeftMenuItem = ({ src, alt = "", itemText }: LeftMenuItemProps) => {
  return (
    <>
      <Link
        href=""
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <Image src={src} alt={alt} width={16} height={16} />
        <span>{itemText}</span>
      </Link>
      <hr className="bt-1 border-gray-100 w-36 self-center" />
    </>
  );
};

export default LeftMenuItem;
