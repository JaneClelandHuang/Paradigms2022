from abc import ABC, abstractmethod

class Book(ABC):
    def __init__(self,bookTitle):
        self.bookTitle = bookTitle

    def printContent(self):
        print("\n"+self.bookTitle)
        
class FrontMatter(Book):
    def __init__(self):
        pass

    def printContent(self):
        print("Front Matter")
        print("ISBN: XXXXXXX")

class Chapter(Book):   
    def __init__(self,chapterTitle):
        self.chapterTitle = chapterTitle

    def printContent(self):
        print("\n" + self.chapterTitle)
        print("Chapter content here")

class Paragraph(Chapter):
    def __init__(self):
        pass

    def printContent(self):
        print("Content for the chapter goes here.")

class Figure(Chapter):
    def __init__(self,caption,imageName):
        self.caption = caption
        self.imageName = imageName

    def printContent(self):
        print(self.caption)
        print(self.imageName + " Image displayed here")    

# Build the book content
bookContent = []
bookContent.append(Book("Programming Paradigms"))
bookContent.append(FrontMatter())
bookContent.append(Chapter("Chapter 1: JavaScript"))
bookContent.append(Paragraph())
bookContent.append(Paragraph())
bookContent.append(Figure("JavaScript image","Javascript Timeline"))
bookContent.append(Chapter("Chapter 2: Python"))
bookContent.append(Paragraph())
bookContent.append(Paragraph())
bookContent.append(Figure("Python Image","Python Timeline"))

for element in bookContent:
    element.printContent()
    
