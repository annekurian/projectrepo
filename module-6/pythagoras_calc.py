def find_a():
    b = float(input("Enter side b: "))
    c = float(input("Enter hypotenuse: "))
    diff = c**2 - b**2
    a = diff**0.5
    print(f"Length of a = {a:.2f}\n")

def find_b():
    a = float(input("Enter side a: "))
    c = float(input("Enter hypotenuse: "))
    diff = c**2 - a**2
    b = diff**0.5
    print(f"Length of b = {b:.2f}\n")

def find_c():
    a = float(input("Enter side a: "))
    b = float(input("Enter side b: "))
    sum = a**2 + b**2
    c = sum**0.5
    print(f"Hypotenuse = {c:.2f}\n")

find_c()
find_b()
find_a()