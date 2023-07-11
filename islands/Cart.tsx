import createAppState from "../utils/state.ts";

export default function Cart() {
  const state = createAppState;

  return (
    <div className="maw-w-screen-xl mx-auto p-4 pt-10 text-center">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th class="px-4 py-2 border-b">Product Name</th>
            <th class="px-4 py-2 border-b">Price</th>
            <th class="px-4 py-2 border-b">TotalPrice</th>
            <th class="px-4 py-2 border-b">Quantity</th>
            <th class="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.value.map((item) => (
            <tr>
              <td class="px-4 py-2 border-b">{item.name}</td>
              <td class="px-4 py-2 border-b">${item.price}</td>
              <td class="px-4 py-2 border-b">${item.price * item.quantity}</td>
              <td class="px-4 py-2 border-b">{item.quantity}</td>
              <td class="px-4 py-2 border-b">
                <button
                  onClick={() => state.removeFromCart(item.id)}
                  class="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Remove 🚮
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td class="px-4 py-2 " colSpan={3}></td>
            <td class="px-4 py-2 border-b">
              <button class="px-4 py-2 bg-green-500 text-white rounded-md">
                Checkout 🛒
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
