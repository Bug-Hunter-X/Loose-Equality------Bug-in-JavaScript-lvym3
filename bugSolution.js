function foo(x) {
  if (x === null) {
    return 0; // Correctly checks for null only
  }
  return x + 1; 
}