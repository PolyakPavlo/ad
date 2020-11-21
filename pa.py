#https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/5513025309440592516/250x250-250-250_961545815/images/logo_370005536.svg
#https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/10936288165658575814/index.html
#https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/12039152952147692331/index.html
##u= "https://tpc.googlesyndication.com/sadbundle/10765472885686066986"
u= 'https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/14840816546562435984'
p='ksau'
##     "url": "https://s0.2mdn.net/879366/DcmEnabler_01_245.js",
#https://s0.2mdn.net/ads/studio
import os
import urllib.request
import shutil
import re
a=[]

try: shutil.rmtree(p)
except: pass
os.mkdir(p)
os.chdir(p)
os.mkdir('libs')
os.mkdir('images')
os.chdir('..')


u=u.replace('index.html','').replace('300x250.html','')
with open('q',encoding='utf-8') as source_file:

     for line in source_file:        
          if 'sadbundle' in line:
               
##               l = line.replace(" 'url': '",'').replace("',\n",'')
##               l = line.replace('background: url("','').replace('"\n','').replace('") no-repeat center;','').replace('\n','')
               
               l = line.replace('          "url":', '').replace(' "', '').replace('              "value": "','').replace('          "url": "','').replace('             value":','').replace('",\n','').replace('"\n','')
               l = re.sub(r'\?\d\d\d\d\d\d\d\d\d\d\d\d\d', '', l)
               l = re.sub(r'.html#t=', '', l)
##               print (l)
               

               a.append(l)
a = list(set(a)) 
##print (a)
for l in a:
     try:
          urllib.request.urlretrieve(l, l.replace(u,'./{}/'.format(p)))
          print (l)
     except:
          pass
os.chdir(p)
try:os.rmdir('libs')
except: pass
try:os.rmdir('images')
except: pass

##
##for i in a:
##     urllib.request.urlretrieve(i, i.replace('https://s0.2mdn.net/sadbundle/11472373290463212580/','./a/'))
##     print (i)
##
####print (a)
####
