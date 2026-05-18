def convert_to_fahrenhiet():
    temp_in_celsius = float(input("Enter the temperature in °Celsius: "))
    if(not (0 >= temp_in_celsius >= 100)):
        print("Temperature not within Celsius scale")
        return
    temp_in_fahrenheit = (temp_in_celsius * (9/5)) + 32
    print(f"Temperature in fahrenheit is {temp_in_fahrenheit} °F")

def convert_to_celsius():
    temp_in_fahrenheit = float(input("Enter the temperature in °Fahrenheit: "))
    if(not (32 >= temp_in_fahrenheit >= 212)):
        print("Temperature not within Fahrenheit scale")
        return
    temp_in_celsius = (temp_in_fahrenheit - 32) * (5/9)
    print(f"Temperature in celsius is {temp_in_celsius} °C")

choice = input("Enter your option (A. C-to-F. B. F-to-C): ")
match choice.lower():
    case "a":
        convert_to_fahrenhiet()
    case "b":
        convert_to_celsius()
    case _:
        print("Invalid choice")
