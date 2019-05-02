Write a function:
that, given an array A consisting of N integers, where A[K] denotes the height of the K-th tree, returns the number of trees you can cut to satisfy the above condition. If the condition cannot be satisfied, your function should return 0.

1. Given A = [3, 4, 5, 4] your function should return 2. You can cut down the tree of height 5 or second tree of height 4:
2. Given A = [4, 5, 2, 3, 4], your function should return 0. After cutting down any of these trees, the rest of the trees will not be ordered by height.
3. Given A = [1, 2, ..., 100,000] (consecutive numbers from 1 to 100,000), your function should return 100,000. You can cut down any of these trees.
