# Loose Equality Bug in JavaScript

This repository demonstrates a common error in JavaScript: the misuse of loose equality (==) when comparing values.  Specifically, it shows how == can lead to incorrect behavior when checking for null values.

## The Bug

The `foo` function attempts to handle null input by checking `x == null`.  However, this check also evaluates to true when `x` is 0, leading to unexpected behavior.  The solution addresses this by using strict equality (===).