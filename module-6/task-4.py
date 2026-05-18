def calc_area(len, wid):
    return len * wid

length = float(input("Enter length of the rectangle (cm): "))
width = float(input("Enter width of the rectangle (cm): "))

area = calc_area(length, width)
print(f"Area of the rectangle is {area} sq.cm")