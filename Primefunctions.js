// Logan Tan
// Fundamentals HW
// eslint-disable-next-line no-unused-vars
function PrimeGen(input) {
  const arraylen = Math.ceil(input / 2);
  const list = Array.from({ length: arraylen }, (_, i) => 2 * i + 1);
  list[0] = 2;
  const accepted = Array(arraylen).fill(true);
  const primes = [];
  let StopValue = _.max(list);
  StopValue = Math.sqrt(StopValue);
  StopValue = Math.ceil(StopValue);
  for (let i = 0; list[i] < StopValue; i++) {
    if (accepted[i]) {
      for (let e = 0; e < list.length; e++) {
        if (list[e] % list[i] === 0 && i !== e) {
          accepted[e] = false;
        }
      }
    }
  }
  for (let i = 0; i < list.length; i++) {
    if (accepted[i]) {
      primes.push(list[i]);
    }
  }
  return primes;
}
function CumulativeSum(input) {
  const WorkSet = Array.from(input);
  for (let i = 1; i < input.length; i++) {
    WorkSet[i] += WorkSet[i - 1];
  }
  return WorkSet;
}
function maxPrimeSum(input) {
  let tuple = [0, 0];
  const length = [];
  let loc = 0;
  const list = PrimeGen(input);
  let sums = CumulativeSum(list);
  const items = [];
  for (let a = 0; a < list.length; a++) {
    for (let i = 0; i < list.length; i++) {
      if (_.contains(sums, list[i])) {
        loc = _.indexOf(sums, list[i]) + 1;
        length.push(loc);
        items.push(list[i]);
      }
    }
    list.shift();
    sums = CumulativeSum(list);
  }
  loc = _.indexOf(length, _.max(length));
  tuple = [items[loc], _.max(length)];
  return tuple;
}
console.log(PrimeGen(963));
console.log(CumulativeSum(PrimeGen(20)));
console.log(maxPrimeSum(1000));
