from Animals import Cow

class Vocalizer:
    def speak(self):
        print("Vocalizing cow sound here")
		
class VocalCow(Vocalizer, Cow):
    pass

c = VocalCow('Bessie')
c.speak()    # speak is in both classes!
          

