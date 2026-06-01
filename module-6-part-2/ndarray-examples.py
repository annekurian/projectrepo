import numpy as np

a = np.array([[1.5, 1.8], [1.3, 2.4]])
print(a)
print('Type(a) =', type(a))
print('Data type (a.dtype) = ', a.dtype)
print('Dimension (a.ndim) = ', a.ndim)
print('Size (a.size) = ', a.size)
print('Shape (a.shape) = ', a.shape)
print('-' *40)

a = np.arange(4) # stop at < n
print(a)
print(a+4)
print(a*4)
print('=' *20)
b = np.arange(4,8)
print(b)
print(a+b)
print(a*b)
print('-' *40)

print('Matrix product')
print('-' *20)
A = np.arange(0,9).reshape(3,3)
print(A)
B = np.ones((3,3))
print(B)
print(np.dot(A,B))
print('-' *40)

print('Indexing a ndarray')
print('-' *20)
A = np.arange(10,19).reshape(3,3)
print(A)
print(A[0,0])
print(A[2][2])

for row in A:
    print(row)

for row in A:
    for cell in row:
        print(cell)
print('-' *40)

print('Array Transposition')
print('-' *20)
print(A.T)
print('=' *20)

#row-wise traversal with original ndarray
for row in A:
    print(row)
print('=' *20)

#column-wise traversal after transposition
for row in A.T:
    print(row)

print('-' *40)

print('Array Slicing')
print('-' *20)

arr = np.arange(0,10)
print(arr)
arr2d = np.arange(1,10).reshape(3,3)
print(arr2d)
print('=' *20)

#slice position in index position 1 to 5
print(arr[1:6])
print('=' *20)

#slice elements in first 2 rows
print(arr2d[:2])
print('=' *20)

#slice elements in first 2 rows and last 2 columns
print(arr2d[:2, 1:])
print('=' *20)

