a=[]
import glob, os, time
from selenium import webdriver
d='d:/Program Files/Git/ad/'
m = os.listdir(d)
r='https://raw.githack.com/DeathBarmaglot/ad/main'

##r='file:///D:/Program%20Files/Git/ad'
for i in m:
    try:
        os.chdir((d+i+'/'))
        for file in glob.glob("*.html"):
            a.append(r+'/{}/{}'.format(i, file))
    except: pass
##for i in a:
##    print(i)
##print(len(a))
driver=webdriver.Firefox()
for i in a:
    try:
        driver.get(i)
        javaScript = 'document.body.style.backgroundColor = "black";'
        driver.execute_script(javaScript)
    except: print(i)
    time.sleep(5)


##import time, os
##import urllib.request
##urllib.request.urlretrieve('https://raw.githubusercontent.com/DeathBarmaglot/ad/main/README.md', 'r.txt')

##with open('r.txt') as source_file:
##     for l in source_file:
##         a.append(l.replace('\n',''))
##          
##

##for i in a:
##    try: driver.get(i)
##    except: print(i)
##    time.sleep(10)
##
##os.system("taskkill /im geckodriver.exe /f")
####os.system("taskkill /im firefox.exe /f")
##
##exit(0)
