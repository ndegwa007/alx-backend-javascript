export default function groceriesList() {
  const map = new Map();
  const products = {
    Apples: 10, Tomatoes: 10, Pasta: 1, Rice: 1, Banana: 5,
  };
  const entries = Object.entries(products);
  entries.forEach(([k, v]) => map.set(k, v));
  return map;
}
