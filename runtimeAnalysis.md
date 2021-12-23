|   Function        |   Insert      |   Append    |
|:-----------------:|:-------------:|:-----------:|
| tinyArray         | 38.324 μs     | 90.802 μs   |
| smallArray        | 48.744 μs     | 107.757 μs  |
| mediumArray       | 159.559 μs    | 230.419 μs  |
| largeArray        | 6.196537 ms   | 550.146 μs  |
| extraLargeArray   | 796.37051 ms  | 3.801082 ms |



It appears that the "Append" function scales alot better than the "insert" function.
"Append" goes up only about  10% between tiny and small, then doubles between small and medium,
doubles again between medium and large, and then about 8x between large and extra large.
So "Append" does alot better. Where as Insert goes up 25% between tiny and small, then quadruples
from small to medium, and from medium to large is 40x slower, and large to extra large is
130x slower.

Upon further research, ".push" adds one element on to the end of they array, making it very fast because it
does not have to shift any elements in the array, it runs in constant time. However, ".unshift" runs 
in linear time, it takes (10 * elementNum) to run, so 10 operations takes 100time, 100 operations
takes 1000time, etc. making it significantly slower than ".push".