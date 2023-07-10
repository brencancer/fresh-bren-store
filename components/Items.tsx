import { Item } from "../utils/items.ts";
import ItemComponent from "../islands/Item.tsx";

interface ItemsProp {
  items: Item[];
}

export default function ItemsComponent({ items }: ItemsProp) {
  return (
    <div className="max-w-screen-xl mx-auto p-4 pt-10">
      <h1 className="text-center text-2xl font-bold">
        Browse our collection of great Items
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
        {items.map((item) => <ItemComponent item={item} />)}
      </div>
    </div>
  );
}
