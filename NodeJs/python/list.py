# list
subjectMarks = [45,55,34,46,24]
print("----------print all value---------------------")
i=0
while i<5:
    print(subjectMarks[i])
    i=i+1

#update a value
print("----------update a value [index 2 value 55 to 85]---------------------")
subjectMarks[2] = 85
i=0
while i<5:
    print(subjectMarks[i])
    i=i+1


#  increase all value by 2
print("----------value increase by 2---------------------")
i=0
for i in range(5):
    subjectMarks[i] = subjectMarks[i]+2
i=0    
while i<5:
    print(subjectMarks[i])
    i=i+1

#
# append a value
#
print("----------append---------------------")
i=0
subjectMarks.append(56)

while i<5:
    print(subjectMarks[i])
    i=i+1

# pop a element
print("----------pop---------------------")
i=0
subjectMarks.pop()
while i<5:
    print(subjectMarks[i])
    i=i+1