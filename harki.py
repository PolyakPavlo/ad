https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/2950503655278431015/Kitkat_santa_nov20_300x250_gdn.html#t=3622203657209555859&p=https%3A%2F%2F423dbfd7f6b7933422960d080666b764.safeframe.googlesyndication.com

https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/17818664874646078952/index.html#t=6089616087260765930&p=https%3A%2F%2F111ab2d942d180763af273203b3a31b1.safeframe.googlesyndication.com

https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/4167922302389240894/index.html#t=11653534202447064464&p=https%3A%2F%2Faf82e76325e9bb0c4913acdaadf43793.safeframe.googlesyndication.com

https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/5553554701420885425/index.html#t=4070378481669097707&p=https%3A%2F%2Fb7c2c4a2259f58bc6050f3ad9f165709.safeframe.googlesyndication.com

https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/4216771179802278745/index.html#t=6294649800865667241&p=https%3A%2F%2F59986bd95c3849ed2efd7b5411bb84ca.safeframe.googlesyndication.com


https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/16927380413237278615/index.html#t=5750484019517468578&p=https%3A%2F%2F7a9dd8a14bbd464f9d9f2fd8ec723108.safeframe.googlesyndication.com


import os

import shutil
import re

import pyautogui as pag
import webbrowser
import csv, requests
import urllib.request
p='n'
a=[]
##u= 'https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/16563390806693426938/index.html'
##u='https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/3996345189382326505/asus-m14-m15-728x90.html'
webbrowser.open(u)
pag.PAUSE = 2
pag.moveTo(50, 620, 1)
pag.hotkey('ctrl','shift', 'e')
pag.PAUSE = 1
pag.hotkey('ctrl','r')
pag.PAUSE = 1
pag.click(button='right')  # щелчок правой кнопкой мыши
pag.keyDown('Down')
pag.keyDown('Down')
pag.press("enter")
pag.typewrite('d:\py\harki', interval=0.2)
pag.PAUSE = 1
pag.press("enter")
pag.hotkey('ctrl', 'w') 
##screenshot = pag.screenshot()
##screenshot.save('screen.png')
##action.send_keys(Keys.TAB)
##actions.key_down(Keys.CONTROL).send_keys('s').key_up(Keys.CONTROL).perform()
print("done")
##with open('page.html', 'w+',encoding='utf-8') as f:
##    f.write(driver.page_source)
##    f.close()
##driver.quit()


# 
# 
# https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/11439951705202997730/asus-m14-m15-300x600.html
#https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-0974384365881089&output=html&h=250&slotname=8893422801&adk=2275641041&adf=995279629&w=300&lmt=1596177222&psa=1&guci=2.2.0.0.2.2.0.0&format=300x250&url=https%3A%2F%2Fmolbuk.ua%2F&flash=0&wgl=1&adsid=NT&dt=1596349695493&bpp=39&bdt=7585&idt=5954&shv=r20200729&cbv=r20190131&ptt=9&saldr=aa&abxe=1&cookie=ID%3D6a718078f19fbd56%3AT%3D1588185375%3AS%3DALNI_MahSP1q6iaQreFc3CFhYyLPYdEiIA&prev_fmts=250x250&correlator=6739057302580&frm=20&pv=1&ga_vid=1457925516.1596349701&ga_sid=1596349701&ga_hid=635046737&ga_fc=0&icsg=153932164890672&dssz=103&mdo=0&mso=0&u_tz=180&u_his=2&u_java=0&u_h=768&u_w=1366&u_ah=768&u_aw=1366&u_cd=24&u_nplug=0&u_nmime=0&adx=873&ady=343&biw=1349&bih=674&scr_x=0&scr_y=0&eid=21066153&oid=3&pvsid=2620898987518880&pem=563&rx=0&eae=0&fc=896&brdim=-8%2C-8%2C-8%2C-8%2C1366%2C0%2C1382%2C784%2C1366%2C674&vis=1&rsz=do%7C%7CeE%7C&abl=CS&pfx=0&fu=8192&bc=31&ifi=2&uci=a!2&fsb=1&xpc=pc6uMTbuMy




try: shutil.rmtree(p)
except: pass
os.mkdir(p)
os.chdir(p)
os.mkdir('libs')
os.mkdir('images')
os.chdir('..')
u='/'.join(u.split('/')[:-1])
with open('harki',encoding='utf-8') as source_file:
  for line in source_file:        
       if 'sadbundle' in line:
            l = line.replace('          "url":', '').replace(' "', '').replace('              "value": "','').replace('          "url": "','').replace('             value":','').replace('",\n','').replace('"\n','')
            l = re.sub(r'\?\d\d\d\d\d\d\d\d\d\d\d\d\d', '', l)
            l = re.sub(r'.html#t=', '', l)
##               print (l)
            a.append(l)
a = list(set(a)) 
for l in a:
  try:
      urllib.request.urlretrieve(l, l.replace(u,'./{}/'.format(p)))
      print (l)
  except:pass
os.chdir(p)
try:os.rmdir('libs')
except: pass
try:os.rmdir('images')
except: pass

exit(0)
