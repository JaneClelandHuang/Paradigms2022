from Animals import Cow

class Vocalizer:
    def vocalize(self):
        print("Vocalizing cow sound here")
		
class VocalCow(Vocalizer, Cow):
    pass

c = VocalCow('Bessie')
print(c.speak())    # speak is inherited from cow
c.vocalize()        # vocalize is inherited from vocalizer
