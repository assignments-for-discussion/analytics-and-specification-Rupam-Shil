
function average(numbers) {
  let realLength = numbers.length;
  return (
    numbers.reduce((p, c) => {
      if (c) return p + c;
      realLength--;
      return p;
    }, 0) / realLength
  );
}

module.exports = {average};
