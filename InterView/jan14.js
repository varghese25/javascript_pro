const obj = {
  value: 42,
  get value() {
    return () => this.value;
  },
};
console.log(obj.value()());
// Output: 42


// Explanation:
// obj.value        → function
// obj.value()      → function
// obj.value()()    → 42
