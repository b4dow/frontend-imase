interface Props {
  title: string;
  value: string;
}
export const Info = ({ title, value }: Props) => {
  return (
    <div className="bg-red-500 p-5 rounded-2xl ">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{value}</p>
    </div>
  );
};
