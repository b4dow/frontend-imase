import Image from "next/image";

type HeadingProps = {
  children: string;
  imageUrl?: string;
};

const Heading = ({ children, imageUrl }: HeadingProps) => {
  return (
    <div className="relative bg-black h-[40vh] rounded-3xl overflow-hidden flex items-center justify-center mx-2">
      <Image
        src={`${
          !imageUrl
            ? "https://images.unsplash.com/photo-1643473232037-08736b56178d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : imageUrl
        }`}
        alt="Imagen de banner"
        fill
        className=" object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 text-white flex items-center justify-center">
        <p className="text-3xl sm:text-4xl font-bold text-center mx-4">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Heading;
