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
        if (list[e] % list[i] === 0) {
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

PrimeGen(20);
