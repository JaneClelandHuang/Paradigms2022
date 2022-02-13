# Testing focus issue
# Seems to be a well-reporte tkinter bug

from tkinter import *

window = Tk()

def handle_focus(event):
    if event.widget == window:
        window.focus_set()
        input1.focus_set()


label1 = Label(window,text = "Enter Text 2")
input1 = Entry(window, bd=5)

label2 = Label(window,text = "Enter Text 2")
input2 = Entry(window, bd=5)

submit = Button(window, text="Submit")

label1.pack()
input1.pack()
label2.pack()
input2.pack()
submit.pack(side=BOTTOM)

window.lift()
window.attributes("-topmost", True)

window.bind("<FocusIn>", handle_focus)

hwnd = window.winfo_id()

window.mainloop()