import CartCounter from "../islands/CartCounter.tsx";

export default function Nav() {
  return (
    <div className="
    bg-white
    max-w-screen-xl
    flex flex-wrap
    items-center
    justify-between 
    mx-auto p-4 border-b-2
    border-gray-200">
      <div className="text-2xl ml-1 font-bold">
        <h1>SanQizz</h1>
      </div>
      <ul className="flex gap-6">
        <li>
          <a href="/" className="text-gray-500 hover:text-gray-700 py-1 border">
            Home
          </a>
        </li>
        <li>
          <a
            href="/cart"
            className="text-gray-500 hover:text-gray-700 py-1 border"
          >
            Cart
            <CartCounter />
          </a>
        </li>
      </ul>
    </div>
  );
}
