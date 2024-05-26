const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const discount = normalizePrice(divide100(multiply20(200)));

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const withСompose = compose(
    normalizePrice,
    divide100,
    multiply20
  );

console.log(withСompose(200, 20, 100, 2));