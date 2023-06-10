
# Python program to demonstrate
# selenium
 
# import webdriver
from selenium import webdriver
from selenium.webdriver.common.by import By
 
# create webdriver object
def test_test1():
    driver = webdriver.Chrome()
    
    # enter keyword to search
    keyword = "geeksforgeeks"
    
    # get geeksforgeeks.org
    driver.get("http://localhost:3001/")
    
    # get element
    email_element = driver.find_element(By.ID ,"email").send_keys("amdin@gmail.com")
    pass_element = driver.find_element(By.ID ,"password").send_keys("12345")
    driver.find_element(By.ID,"SubButton").click()

    assert driver.current_url== "http://localhost:3001/Home"