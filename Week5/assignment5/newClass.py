class PyClass:
    def __init__(self):
        self.list = []
        
    def addItem(self, string):
        self.list.append(string)
    
    def searchItem(self, string):
        if string in str(self.list):
            return True
        else:
            return False
    
    def evaluateItems(self):
        result = []
        for item in self.list:
            result.append(eval(item))
        return result