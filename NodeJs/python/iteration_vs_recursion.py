# Iteration

# for i in range (10):
#     print(i)


# recursion
def fun(n):
    if (n == 0):
        return
    print(n)
    return fun(n-1)


fun(10)
