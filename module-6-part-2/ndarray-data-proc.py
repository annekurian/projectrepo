import numpy as np

print('Boolean Indexing')
print('-' *20)
names = np.array(['Bob', 'Joe', 'Will', 'Bob', 'Will', 'Joe', 'Joe'])
data = np.random.rand(7,4)
print(names)
print(data)
print('=' *20)

print(names == 'Bob')
print('=' *20)

print(data[names == 'Bob'])
print('=' *20)

#select Bob or Will
print('Logical operators in Boolean Indexing')
print('-' *20)
mask = (names == 'Bob') | (names == 'Will')
print(mask)
print(data[mask])
print('=' *20)
print('Setting values using  Boolean Indexing')
print('-' *20)

data[data < 0.7] = 0
print(data)
print('-' *40)
