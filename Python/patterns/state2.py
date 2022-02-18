from abc import ABC, abstractmethod

class State(ABC):

    def __init__(self,gumball_machine):
	    self.gumball_machine = gumball_machine
 
    @abstractmethod
    def insert_quarter(self):
        pass

    @abstractmethod
    def eject_quarter(self):
        pass

    @abstractmethod
    def turn_crank(self):
        pass

    @abstractmethod
    def dispense(self):
        pass
		
class NoQuarterState(State):

    def __init__(self,gumball_machine):
        print("hello")
        super().__init__(gumball_machine)

    def insert_quarter(self):
        print("You inserted a quarter")
        self.gumball_machine.set_state(self.gumball_machine.get_quarter_state())

    def eject_quarter(self):
        print("You haven't inserted a quarter")

    def turn_crank(self):
        print("You turned, but there's no quarter")

    def dispense(self):
        print("You need to pay first")

class HasQuarterState(State):

    def __init__(self,gumball_machine):
        print("hello")
        super().__init__(gumball_machine)

    def insert_quarter(self):
        print("You can't insert another quarter")

    def eject_quarter(self):
        print("Quarter returned")
        self.gumball_machine.set_state(self.gumball_machine.get_no_quarter_state())

    def turn_crank(self):
        print("You turned the crank")
        self.gumball_machine.set_state(self.gumball_machine.get_sold_state())
        self.dispense()
        
    def dispense(self):
        print("Gumball is dispensed")
        
class SoldOutState(State):

    def __init__(self,gumball_machine):
        print("hello")
        super().__init__(gumball_machine)

    def insert_quarter(self):
        print ("You can't insert a quarter, the machine is sold out.")

    def eject_quarter(self):
        print ("You can't eject, you haven't inserted a quarter.")
        self.gumball_machine.set_state(self.gumball_machine.get_no_quarter_state())

    def turn_crank(self):
        print ("You turned but there are no gumballs")

    def dispense(self):
        print ("No gumball dispensed")


class SoldState(State):

    def __init__(self,gumball_machine):
        print("hello")
        super().__init__(gumball_machine)

    def insert_quarter(self):
        print ("Please wait, we're already giving you a gumball.")

    def eject_quarter(self):
        print ("Sorry you already turned the crank.")

    def turn_crank(self):
        print ("You turned but there are no gumballs")

    def dispense(self):
        print("A gumball is rolling out the slot")
        self.count = self.count - 1
        if self.count == 0:
            print("Oops out of gumballs")
            self.state = self.sold_out
        else:
            self.state = self.no_quarter

