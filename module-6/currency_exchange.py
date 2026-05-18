exchange_rate=1.3100

amount_in_usd = float(input("Enter the amount in USD: "))
amount_in_sgd = amount_in_usd * exchange_rate
print(f"{amount_in_usd} USD is equal to {amount_in_sgd:.2f} SGD ")

amount_in_sgd = float(input("Enter the amount in SGD: "))
amount_in_usd = amount_in_sgd / exchange_rate
print(f"{amount_in_sgd} SGD is equal to {amount_in_usd:.2f} USD ")