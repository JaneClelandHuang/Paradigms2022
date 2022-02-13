try:
    print(x)
except NameError as e:
    print('NameError raised as expected')
	
x = "I'm global"
	
def problem():
    print(x)
    x = "I'm global"

try:
    problem()
except UnboundLocalError as e:
    print('UnboundLocalError raised as expected')

	