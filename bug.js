function foo(x) {
  if (x == null) {
    return 0; // This will also return 0 if x is 0
  }
  return x + 1; 
}