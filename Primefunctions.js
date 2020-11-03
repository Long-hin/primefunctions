// Logan Tan
// Fundamentals HW
// eslint-disable-next-line no-unused-vars
function PrimeGen(input) {
  const list = Array.from({ length: input / 2 }, (_, i) => 2 * i + 1);
  list[0] = 2;
  const accepted = Array(input / 2).fill(true);
  const primes = [];
  let StopValue = _.max(list);
  StopValue = Math.sqrt(StopValue);
  StopValue = Math.trunc(StopValue);
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
  const WorkSet = input;
  for (let i = 1; i < input.length; i++) {
    WorkSet[i] += WorkSet[i - 1];
  }
  return WorkSet;
}
function maxPrimeSum(input) {
  const list = PrimeGen(input);
  const sums = CumulativeSum(list);
  const set = Array(2);
  let test = 0;
  for (let i = list.length; i >= 0; i--) {
    test = _.find(list, function (thing) { if (sums[i] === thing) return true; return false; });
    console.log(list);
    if (test !== undefined) {
      set[0] = test;
      set[1] = i;
      break;
    }
  }
  return set;
}
console.log(PrimeGen(20));
console.log(CumulativeSum(PrimeGen(20)));
console.log(maxPrimeSum(1000));
