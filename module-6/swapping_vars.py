# Using a thrid variable to swap two variables
num1 = 111
num2 = 888
print(num1, num2)
temp=num1
num1=num2
num2=temp
print(num1, num2, '\n')

# Using a special Python language construct/syntax
num1 = 111
num2 = 888
print(num1, num2)
num1, num2 = num2, num1
print(num1, num2)

# Using complementary arithmetic operations i.e., + and -, or * and /
# For integer numbers, we can also use XOR ^ 
num1 = num1+num2
num2 = num1 - num2
num1 = num1 - num2
print(num1, num2, '\n')
