import createAppState from "../utils/state.ts";

export default function CartCounter() {
  const state = createAppState;

  const count = state.cart.value.reduce((acc, item) => acc + item.quantity, 0);
}
