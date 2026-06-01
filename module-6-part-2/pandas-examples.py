import pandas as pd

s1 = pd.Series([12, -4, 7, 9])
# print(s1)

s2 = pd.Series([12, -4, 7, 9], index = ['a', 'b', 'c', 'd'])
print(s2)
print('=' *20)

print(s2.iloc[2]) # accessing using 0-based index
print(s2['c'])
print('=' *20)

print(s2[0:2])
print(s2[['a','b']])
print('=' *20)

#Assigning values
s2.iloc[1] = 0
print(s2)
print('=' *20)

s2['b'] = 1
print(s2)
print('=' *20)

#Filtering values
print(s2[s2 > 8])
print('-' *40)

print('Descriptive Analytics with series')
print('-' *20)

serd = pd.Series([1,0,2,1,2,3], index = ['white', 'white', 'blue', 'green', 'green', 'yellow'])

# All unique values without duplicates
print('Unique values: ', serd.unique())
print('=' *20)

# Unique values with count of occurences
print(serd.value_counts())
print('=' *20)

# Evaluates values membership
print(serd.isin([0,3]))
print(serd[serd.isin([0,3])])

# DATAFRAMES
##############

data = {
    'color':['blue', 'green','yellow', 'red', 'white'],
    'object':['ball', 'pen', 'pencil', 'paper', 'mug'],
    'price':[1.2, 1.0, 0.6, 0.9, 1.7]
}
print('Dictionary: ', data)
print('=' *20)
frame = pd.DataFrame(data, index=['a','b','c','d','e'])
print('DataFrame:\n',  frame)
print('=' *20)

print('Frame[price]:\n', frame['price'])
print('=' *20)
print('Frame.price:\n', frame.price)
print('=' *20)

print('Frame.iloc[0]:\n', frame.iloc[0])
print('=' *20)
print('Frame.iloc[1]["price"]: ', frame.iloc[1]['price'])
print('Frame.iloc[2].price: ', frame.iloc[2].price)
print('=' *20)

print('Frame.loc[\'a\']:\n', frame.loc['a'])
print('=' *20)
print('Frame.loc[\'b\']["price"]: ', frame.loc['b']['price'])
print('Frame.loc[\'c\'].price: ', frame.loc['c'].price)
print('-' *40)

print('Handling missing data')
print('-' *20)
data1={
    'ball':[0, 4, 8, 12],
    'pen':[1, 5, 9, 13],
    'pencil':[2, 6, 10, 14],
    'paper':[3,7,11,15]
}

frame1 = pd.DataFrame(data1, index=['red','blue', 'yellow', 'white'])
print(frame1)
print('=' *20)

data2={
    'mug':[0, 3, 6, 9],
    'pen':[1, 4, 7, 10],
    'ball':[2, 5, 8, 11],
}

frame2 = pd.DataFrame(data2, index=['blue','green', 'white', 'yellow'])
print(frame2)
print('=' *20)

frame3 = frame1.add(frame2)
print('Frame 1 + Frame 2:\n', frame3)
print('=' *20)

print('Sum:\n', frame1.sum())
print('=' *20)

print('Mean:\n', frame1.mean())
print('=' *20)

print('Describe:\n', frame1.describe())
print('=' *20)