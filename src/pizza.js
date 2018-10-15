export const fetchPizza = () => {
  return fetch("https://aquent-pizza-api.herokuapp.com/pizzas").then(res =>
    res.json()
  );
};
