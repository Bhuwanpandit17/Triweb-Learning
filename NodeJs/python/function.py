# no argument function 

def fun1():
    print("No argument Function..")


fun1()
# Argument function
def fun2(num1,num2):
    print("Sum : ",num1+num2)

fun2(2,3)


# return function

def fun3(num1,num2):
    sum=num1+num2
    return sum


returnvalue = fun3(2,3)
print("Return Value : ",returnvalue)    