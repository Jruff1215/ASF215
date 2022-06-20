import pytest

from newClass import PyClass

@pytest.fixture
def instance():
    instance = PyClass()
    instance.addItem("2+2")
    return instance

def test_AddItem(instance):
    # instance = PyClass()
    # instance.addItem("2+2")
    instance.addItem("ham+burger")
    assert instance.list == ["2+2", "ham+burger"]

def test_SearchItem(instance):
    # instance = PyClass()
    assert instance.searchItem("2+2") == True

def test_NotFoundItem(instance):
    # instance = PyClass()
    assert instance.searchItem("2+1") == False

def test_Evaluate(instance):
    # instance = PyClass()
    assert instance.evaluateItems() == [4]



