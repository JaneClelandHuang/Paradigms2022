class B4:
    def speak(self):
        print("B4")
		
class B5:
    def speak(self):
        print("B5")

class B6:
    def speak(self):
        print("B6")
		
class B7:
    def speak(self):
        print("B7")
		
class B3(B6,B7):
    def speakX(self):
        print("B3")
		
class B2(B4,B5):
    def speakX(self):
        print("B2")
		
class B1(B2,B3):
    def speakX(self):
        print("B1")
		
b1 = B1()
b1.speak()


		
