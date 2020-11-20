import os

a=[]
p='a'
import urllib.request
import shutil
try: shutil.rmtree(p)
except: pass
os.mkdir(p)
os.chdir(p)
os.mkdir('libs')
os.mkdir('images')
os.chdir('..')

u= "https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/12542480938338627507/index.html"
u=u.replace('index.html','')
with open('t',encoding='utf-8') as source_file:

     for line in source_file:        
          if 'sadbundle' in line:
##               l = line.replace(" 'url': '",'').replace("',\n",'').replace('",\n','')

               l = line.replace('?1603107190306', '').replace('              "value": "','').replace('          "url": "','').replace('",\n','').replace('"\n','')
##               l = line.replace('background: url("','').replace('"\n','').replace('") no-repeat center;','').replace('\n','')
               a.append(l)
a = list(set(a)) 
##print (a)
for l in a:
     try:
          urllib.request.urlretrieve(l, l.replace(u,'./a/'))
          print (l)
     except:
          pass


##
##for i in a:
##     urllib.request.urlretrieve(i, i.replace('https://s0.2mdn.net/sadbundle/11472373290463212580/','./a/'))
##     print (i)
##
####print (a)
####
