def sum(num1, num2):
    return num1+num2


def subtract(num1, num2):
    return num1-num2


def multiply(num1, num2):
    return num1*num2


def divide(num1, num2):
    return num1/num2


while 1:
    print("1 for addition: ")
    print("2 for subtraction: ")
    print("3 for Multiplaction: ")
    print("4 for Divide: ")
    print("0 for Exit: ")
    ch = int(input("Enter a number: "))
    if ch == 0:
        print("Exit program...")
        break
    print("Enter two number: ")
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter Second number: "))
    result = 0
    if ch == 1:
        result = sum(num1, num2)
    if ch == 2:
        result = subtract(num1, num2)
    if ch == 3:
        result = multiply(num1, num2)
    if ch == 4:
        result = divide(num1, num2)
    print("Result : ", result)
