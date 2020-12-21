a=[]
import pyautogui as pag
import glob, os, time, webbrowser
from selenium import webdriver
d='d:/ad/'
m = os.listdir(d)
r='https://raw.githack.com/DeathBarmaglot/ad/main'
##r='file:///D:/Program%20Files/Git/ad'
for i in m:
    try:
        os.chdir((d+i+'/'))
        for file in glob.glob("*.html"):
            a.append(r+'/{}/{}'.format(i, file))
    except: pass
##for i in a:print(i)

for i in a:
    try:
        webbrowser.open(i)
    except: print(i)
    time.sleep(7)
    pag.hotkey('ctrl', 'w') 


##for file in glob.glob("*.htm"):
##
##    
##    webbrowser.open(file)
####    javaScript = 'document.body.style.backgroundColor = "black";'
####    driver.execute_script(javaScript)
##    time.sleep(10)
##    pag.hotkey('ctrl', 'w') 
##
##for i in m:
##    if "htm" in m:
##       a.append(i)
##
##
##for i in a:
##    try:
##        webbrowser.open(i)
##
####        driver.get(i)
##        time.sleep(10)
##    except: print(i)
######    
######
######
########for i in m:
########    try:
########        os.chdir((d+i+'/'))
########        for file in glob.glob("*.html"):
########            a.append(r+'/{}/{}'.format(i, file))
########    except: pass
########for i in a:
########    try:
########        driver.get(i)
########        javaScript = 'document.body.style.backgroundColor = "black";'
########        driver.execute_script(javaScript)
########        time.sleep(10)
########    except: print(i)
########    
######
######
######
######
########import time, os
########import urllib.request
########urllib.request.urlretrieve('https://raw.githubusercontent.com/DeathBarmaglot/ad/main/README.md', 'r.txt')
######
########with open('r.txt') as source_file:
########     for l in source_file:
########         a.append(l.replace('\n',''))
########          
########
########driver=webdriver.Firefox()
##########driver.get('http://gmail.com')
##########d=driver.find_elements_by_tag_name('input')
##########hrefs = [elem.get_attribute('href') for elem in d]
##########print(hrefs)
##########driver.find_element_by_id("AxOyFc snBya").sendKeys("fghjkl11")
##########driver.find_element_by_id("whsOnd zHQkBf").sendKeys("YOUR PASSWORD")
##########driver.find_element_by_id("VfPpkd-RLmnJb").click()
########
########for i in a:
########    try: driver.get(i)
########    except: print(i)
########    time.sleep(10)
########
########os.system("taskkill /im geckodriver.exe /f")
##########os.system("taskkill /im firefox.exe /f")
########
########exit(0)
