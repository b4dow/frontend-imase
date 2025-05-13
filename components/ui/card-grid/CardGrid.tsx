"use client";
import { Item } from "@/interface/global.interface";
import { Card } from "../card/Card";

interface Props<T> {
  title: string;
  data: Array<T>;
}

export const CardGrid = <T extends Item>({ title, data }: Props<T>) => {
  return (
    <div className="px-10 sm:px-0 grid grid-cols-1 sm:grid-cols-3 gap-10 mb-28">
      {data.map((item) => (
        <Card<T> key={item.id} data={item} url={title} />
      ))}
    </div>
  );
};
