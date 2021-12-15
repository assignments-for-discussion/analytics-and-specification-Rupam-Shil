/**
 * @param {array} numbers ;
 * @param {number} maxVariance  difference between max and min : default 2;
 * @param {number} maxEachVariance value of high variance in successive /
 *  reading default 10;
 * @param {number} highVarianceOccurrence no of occurrence of high variance /
 *  in successive readings : default 0 ;
 * @returns average of the giver array if no violation else Nan ;
 */

function average(numbers, maxVariance = 0, maxEachVariance = 0,
    highVarianceOccurrence = 0) {
  let realLength = numbers.length;
  const avg = numbers.reduce((p, c) => {
    if (!isNaN(c)) return p + c;
    realLength--;
    return p;
  }, 0) / realLength;

  let isExtremeVariance = false;
  const nonNanNumbers = numbers.filter((number) => !isNaN(number));
  // For maximum variance
  if (maxVariance) {
    const min = Math.min(...nonNanNumbers);
    const max = Math.max(...nonNanNumbers);
    (max-min) > maxVariance ? isExtremeVariance = true : null;
  }
  // For each variance
  if (maxEachVariance) {
    for (let i = 0; i < nonNanNumbers.length-1; i++) {
      if (Math.abs(nonNanNumbers[i]-nonNanNumbers[i+1]) > maxEachVariance) {
        highVarianceOccurrence--;
      }
    }
    highVarianceOccurrence < 0 ? isExtremeVariance = true : null;
  }
  // return the average
  return !isExtremeVariance ? avg : NaN;
}

module.exports = {average};
