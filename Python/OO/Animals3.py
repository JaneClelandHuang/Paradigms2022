# Example of a superclass and subclasses

class Animal:
    def __init__(self,name):
        self.name = name
    def speak(self):
        return '{} says {}'.format(self.name,self.sound())

class Cow(Animal):
    def sound(self):
        return 'moooo'

class Horse(Animal):
    def sound(self):
        return 'neigh'

class Dog(Animal):
    def sound(self):
        return 'woof'
		
class Duck(Animal):
    def sound(self):
        return 'quack'

class Chinchilla(Animal):
    def sound(self):
        return 'tchh'
		
class Snail(Animal):
    def sound(self):
        return ''

if __name__=='__main__':
    # creating list        
    list = []  
  
    # appending instances to list  
    list.append( Horse("Apache")) 
    list.append( Duck("Kimberley ShnickleFritz"))
    list.append( Dog("Paxton"))
    list.append( Dog("Lucy"))
    list.append( Chinchilla("Jose"))

for obj in list: 
    print(obj.name, 'says', obj.sound())

