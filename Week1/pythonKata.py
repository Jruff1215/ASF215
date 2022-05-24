def pepsiCoke(number):
    if number == 1:
        return "1"
    elif number == 2:
        return "2"
    elif number%3 == 0 and number%5 == 0:
        return "PepsiCoke"
    elif number%3 == 0:
        return "Pepsi"
    elif number%5 == 0:
        return "Coke"
print(pepsiCoke(1))
print(pepsiCoke(2))
print(pepsiCoke(3))
print(pepsiCoke(5))
print(pepsiCoke(9))
print(pepsiCoke(10))
print(pepsiCoke(30))
