from MultipleInheritance2 import *
		
class B2(B3):
    def speakX(self):
        print("B2")
		
class B1(B2):
    def speakX(self):
        print("B1")
		
b1 = B1()
b1.speak()


		
