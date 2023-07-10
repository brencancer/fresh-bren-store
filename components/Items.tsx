import { Item } from "../utils/items.ts";

interface ItemsProp {
  items: Item[];
}

export default function ItemsComponent({ items }: ItemsProp) {
  return (
    <div className="max-w-screen-xl mx-auto p-4 pt-10">
      <h1 className="text-center text-2xl font-bold">
        Browse our collection of great Items
      </h1>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <section>
            <img src={item.image} alt="item image" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
