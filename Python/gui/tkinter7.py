# Demonstrates the arrow keys.
# Click on the widget first to get focus.
#widget.focus() doesn't work

from tkinter import *
     
def showPosEvent(event):
    print('Widget=%s X=%s Y=%s' % (event.widget, event.x, event.y))
     
def onUpArrowKey(event): 
    print('Up arrow key pressed')

def onDownArrowKey(event): 
    print('Down arrow key pressed')

def onLeftArrowKey(event): 
    print('Left arrow key pressed')
         
tkroot = Tk()
labelfont = ('courier', 20, 'bold')                
widget = Label(tkroot, text='Testing arrow keys')
widget.config(bg='gray', font=labelfont)            
widget.config(height=5, width=20)                  
widget.pack(expand=YES, fill=BOTH)

widget.bind('<Up>',onUpArrowKey)   
widget.bind('<Down>',onDownArrowKey)
widget.bind('<Left>',onLeftArrowKey)
widget.focus()  
                                
tkroot.title('Click Me')
tkroot.mainloop()
