from CompositePattern import *
      
class Book(Composite):
    def __init__(self,bookTitle):
        self.bookTitle = bookTitle
        super().__init__()
    def printContent(self):
        print("\n"+self.bookTitle)
        
class FrontMatter(Leaf):
    def __init__(self):
        super().__init__()
    def printContent(self):
        print("Front Matter")
        print("ISBN: XXXXXXX")

class Chapter(Composite):
    def __init__(self,chapterTitle):
        self.chapterTitle = chapterTitle
        super().__init__()
    def printContent(self):
        print("\n" + self.chapterTitle)
        print("Chapter content here")

class Paragraph(Leaf):
    def __init__(self):
        super().__init__()
    def printContent(self):
        print("Paragraph text here.")

class Figure(Leaf):
    def __init__(self,caption,imageName):
        self.caption = caption
        self.imageName = imageName
        super().__init__()
    def printContent(self):
        print(self.caption)
        print(self.imageName + " Image displayed here")    

# Build the book content 
book = Book("Programming Paradigms")

book.add(FrontMatter())
chapter = Chapter("Chapter 1: JavaScript")
book.add(chapter)
chapter.add(Paragraph())
chapter.add(Paragraph())
chapter.add(Figure("JavaScript image","Javascript Timeline"))

chapter2 = (Chapter("Chapter 2: Python"))
book.add(chapter2)
chapter2.add(Paragraph())
chapter2.add(Paragraph())
chapter2.add(Figure("Python Image","Python Timeline"))

# Now print it
# We only have to make the call on the parent!
book.performOperation()

