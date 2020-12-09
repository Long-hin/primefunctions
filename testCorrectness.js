describe('PrimeGen(10)',function(){
  it ('must equal [2,3,5,7]', function(){
    chai.expect(PrimeGen(10)).to.deep.equal([2,3,5,7]);
  });
});
describe('PrimeGen(20)',function(){
  it ('must equal [2,3,5,7,11,13,17,19]',function() {
    chai.expect(PrimeGen(20)).to.deep.equal([2,3,5,7,11,13,17,19]);
  });
});
describe('cumulativeSum([1,2,3,4])',function(){
  it ('must equal [1,3,6,10]', function(){
    chai.expect(CumulativeSum([1,2,3,4])).to.deep.equal([1,3,6,10]);
  });
});
describe('cumulativeSum([10,11,12,13,14])',function(){
  it ('must equal [10,21,33,46,60]',function() {
    chai.expect(CumulativeSum([10,11,12,13,14])).to.deep.equal([10,21,33,46,60]);
  });
});
describe('maxPrimeSum(100)',function(){
  it ('must equal [41, 6]', function(){
    chai.expect(maxPrimeSum(100)).to.deep.equal([41, 6]);
  });
});
describe('maxPrimeSum(1000)',function(){
  it ('must equal [953, 21]',function() {
    chai.expect(maxPrimeSum(1000)).to.deep.equal([953, 21]);
  });
});
