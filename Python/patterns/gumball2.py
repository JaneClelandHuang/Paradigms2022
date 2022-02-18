from state2 import *

class GumballMachine:

    def __init__(self,count):
        		
        self.sold_out = SoldOutState(self)
        self.no_quarter = NoQuarterState(self)
        self.has_quarter = HasQuarterState(self)
        self.sold = SoldState(self)
        
        self.state = self.sold_out
        self.count = count
		
		# Inventory of gumballs
        if self.count > 0:
            self.state = self.no_quarter
            
    def set_state(self,new_state):
        self.state = new_state;

    def insert_quarter(self):
        self.state.insert_quarter()

    def eject_quarter(self):
        self.state.eject_quarter()

    def turn_crank(self):
        self.state.turn_crank()

    def dispense(self):
        self.state.dispense()

    def get_sold_out_state(self):
	    return self.sold_out

    def get_no_quarter_state(self):
        return self.no_quarter
  
    def get_quarter_state(self):
        return self.has_quarter

    def get_sold_state(self):
        return self.sold

gbm = GumballMachine(5)
gbm.insert_quarter()
gbm.turn_crank()
gbm.insert_quarter()
gbm.eject_quarter()
gbm.turn_crank()
gbm.turn_crank()
gbm.insert_quarter()
gbm.turn_crank()
			