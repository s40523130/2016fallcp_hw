var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","title":"About","text":"2016Fall 修課成員網誌"},{"url":"./w17-lian-xi.html","tags":"Cours","title":"W17 練習","text":"2017年元旦快樂 首先了解random亂數模組的用法 然後利用random模組產生一個介於1-100的整數,列印在網頁上 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"onebar\"] ctx = canvas.getContext(\"2d\") # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (200, 200) 座標點 ctx.moveTo(200, 200) # 然後畫直線到 (200, 300) 座標點 ctx.lineTo(200, 300) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() circle(200,200,5)"},{"url":"./w16-lian-xi.html","tags":"Cours","title":"W16 練習","text":"2017年元旦快樂 首先了解random亂數模組的用法 然後利用random模組產生一個介於1-100的整數,列印在網頁上 window.onload=function(){ brython(1); } from browser import document from browser import html import random print_location = document[\"newyear\"] def gen_int(): num = random.randint(1,100) #print_location = document[\"newyear\"] print_location <= num + html.BR() def lottery(e): for i in range(6): gen_int() print_location <= \"恭喜中獎?\" + html.BR() #document[\"but1\"].bind(\"click\", gen_int) document[\"but1\"].bind(\"click\", lottery) 產生整數亂數 from browser import document from browser import html import random print_location = document[\"newyear\"] def lottery(e): num_list = random.sample(list(range(1, 50)), 6) for i in range(6): print_location <= num_list[i] + html.BR() print_location <= \"(不會重複)恭喜中獎!\" + html.BR() document[\"but2\"].bind(\"click\", lottery) 恭喜發財"},{"url":"./w15-lian-xi.html","tags":"Cours","title":"W15 練習","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 try: if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() except: c <= \"請輸入整數?\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa"},{"url":"./w14-lian-xi.html","tags":"Cours","title":"W14 練習","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document from browser import alert def get_input(ev): the_input= input(\"上課不要玩手機\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 40523130 from browser import document from browser import alert def get_input(ev): the_input= input(\"上課不要玩手機\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input)"},{"url":"./w13-brython-hui-tu-fan-wei.html","tags":"Cours","title":"W13 Brython 繪圖範圍","text":"將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成 brython window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc['container'] mystring = \"\" num = input(\"請輸入重複執行次數\") #for i in range(1, 11): for i in range(1,int(num)+1): mystring +=str(i) + \": hello mde\"+ html.BR() container <= mystring from browser import document as doc from browser import html container = doc['container'] mystring = \"\" num = input(\"請輸入重複執行次數\") #for i in range(1, 11): for i in range(1,int(num)+1): mystring +=str(i) + \": hello mde\"+ html.BR() container <= mystring from browser import document as doc from browser import html container = doc['container'] mystring = \"\" cdegree = input(\"請輸入攝氏溫度\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏\" + str(cdegree) + \"度=華氏\" + str(fdegree) + \"度\" container <= output_string from browser import document as doc from browser import html container = doc['container'] mystring = \"\" cdegree = input(\"請輸入攝氏溫度\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏\" + str(cdegree) + \"度=華氏\" + str(fdegree) + \"度\" container <= output_string 開始進行範例分類: 接受使用者的輸入 利用 alert()顯示結果 直接列印結果"},{"url":"./w12-brython-hui-tu-fan-wei.html","tags":"Cours","title":"W12 Brython 繪圖範圍","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) mylist = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] num = 0 for s in mylist: #canvasText(100, 80, 20, \"A\", \"B\", \"\", \"black\", ctx) canvasText(100+num*w, 80, 20, s, \"\", \"\", \"black\", ctx) num = num + 1"},{"url":"./git-zhi-ling-ying-yong.html","tags":"Misc","title":"git 指令應用","text":"2016-11-10_22-28-44 from 陳士正 on Vimeo ."},{"url":"./w10-brython-hui-tu-fan-wei.html","tags":"Cours","title":"W10 Brython 繪圖範圍","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 100) ctx.lineTo(150, 200) ctx.lineTo(100, 200) ctx.lineTo(100, 100) # 畫右上左下的斜線 #ctx.moveTo(150, 100) #ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 for i in range(10): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() 以下為程式碼 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 100) ctx.lineTo(150, 200) ctx.lineTo(100, 200) ctx.lineTo(100, 100) # 畫右上左下的斜線 #ctx.moveTo(150, 100) #ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 for i in range(10): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()"},{"url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","tags":"Misc","title":"2016Fall 機械設計主題教學","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs)"}]};