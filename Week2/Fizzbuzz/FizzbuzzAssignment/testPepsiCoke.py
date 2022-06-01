def PepsiCoke(number = 0):
    if number == 3:
        return "Pepsi"
    elif number == 5:
        return "Coke"
    elif number%3 == 0 and number%5 == 0:
        return "PepsiCoke"
    elif number%3 == 0:
        return "Pepsi"
    elif number%5 == 0:
        return "Coke"

    
    return str(number)


def testPepsiCoke():
    PepsiCoke()
def testPassOne():
    assert PepsiCoke(1) == "1"
def testPassTwo():
    assert PepsiCoke(2) == "2"
def testPassThree():
    assert PepsiCoke(3) == "Pepsi"
def testPassFive():
    assert PepsiCoke(5) == "Coke"
def testPassMultThree():
    assert PepsiCoke(6) == "Pepsi"
def testPassMultFive():
    assert PepsiCoke(10) == "Coke"
def testPassMultThreeFive():
    assert PepsiCoke(15) == "PepsiCoke"