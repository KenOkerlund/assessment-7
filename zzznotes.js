/*
Results for the extraLargeArray
insert 949.8315 ms
append 2.3299 ms

Results for the tinyArray
insert 39.3 μs
append 85.8 μs

Results for the smallArray
insert 45.8 μs
append 91.5 μs

Results for the mediumArray
insert 172.9 μs
append 128.8 μs

Results for the largeArray
insert 8.092 ms
append 504.6 μs

Results for the extraLargeArray
insert 929.9885 ms
append 2.3312 ms


Insert runs faster if it is a smaller array than push. However, as the array gets larger, the longer it will take
for the insert to run and the faster the append will run.  The append absolutely scales better,
and you can tell because it's time does not go up nearly as much as the insert does as length is added to the array


*/