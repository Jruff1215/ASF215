class List():
    
    def __init__ (self):
        self.list = []
    def addItem(self, item):
        self.list.append(item)
    def addDict(self,*item):
        newDict = {}
        for prop in item:
            newDict = {**prop, **newDict}
        self.list.append(newDict)
    def addTuple(self, *item):
        self.list.append(item)   

itemList = List()
itemList.addItem(22)
itemList.addItem("Hello World")
itemList.addDict({"type": "Dog"},{ "breed": "Dachshund"}, {"color": "Black/Brown"})
itemList.addTuple("Doxen", "Weenie", "Weiner Dog")
print(itemList.list)