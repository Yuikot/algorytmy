function pyramid(n) {
    for (let i = 0; i < n; i++) {
      const spaces = ' '.repeat(n - i - 1);
      const hashes = '#'.repeat(2 * i + 1);
      const row = spaces + hashes + spaces;
      console.log(row);
    }
  }
module.exports = pyramid;
