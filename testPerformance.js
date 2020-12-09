describe('maxPrimeSum(10000)',function(){
  it ('faster then 100 ms', function(){
    this.timeout(100);
    maxPrimeSum(10000)
  });
});

describe('maxPrimeSum(100000)',function(){
  it ('must befaster then 1000 ms',function(done) {
    this.timeout(1000);
    maxPrimeSum(100000)
  });
});
