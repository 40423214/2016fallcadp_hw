var tipuesearch = {"pages":[{"url":"./pages/about-bg6/","text":"2016Fallcadpb_bg6 成員簡報 組長 40423206 組員 40423214 組員 40423216 組員 40423224 組員 40423226 組員 40423229 2016Fallcadpb_bg6 成員網誌 組長 40423206 組員 40423214 組員 40423216 組員 40423224 組員 40423226 組員 40423229","tags":"misc","title":"About Bg6"},{"url":"./20161104w8.html","text":"","tags":"Misc","title":"20161104W8"},{"url":"./20161028w7.html","text":"使用Trace Point計算路徑 解決子模組設定的問題 把以下多餘的子模組刪掉 [submodule \"2016fallcadp_hw\"] path = 2016fallcadp_hw url = https://github.com/40423226/2016fallcadp_hw.git branch = gh-pages 更改後為以下的內容 [submodule \"40423206\"] path = 40423206 url = https://github.com/40423206/2016fallcadp_hw.git branch = gh-pages [submodule \"40423224\"] path = 40423224 url = https://github.com/40423224/2016fallcadp_hw.git branch = gh-pages [submodule \"40423226\"] path = 40423226 url = https://github.com/40423226/2016fallcadp_hw.git branch = gh-pages [submodule \"40423229\"] path = 40423229 url = https://github.com/40423229/2016fallcadp_hw.git branch = gh-pages [submodule \"40423214\"] path = 40423214 url = https://github.com/40423214/2016fallcadp_hw.git branch = gh-pages [submodule \"40423216\"] path = 40423216 url = https://github.com/40423216/2016fallcadp_hw.git branch = gh-pages","tags":"Misc","title":"20161028W7"},{"url":"./20161021w6.html","text":"解決子模組在對應上的問題 因為之前的2016fallcadp_hw倉儲少複製了一些東西,刪除舊的倉儲後,重新做一個和之前倉儲同名的2016fallcadp_hw倉儲,但是在小組倉儲所連結的子模組,抓不到新倉儲連結,所以我們需要重新加入一次組員倉儲的資料 以為只要再輸入一次指令就可以讓程式抓最新的子模組近來 Y:\\tmp\\2016fallcadp_bg6>git submodule add -b gh-pages https://github.com/40423214/2016fallcadp_hw.git 40423214 '40423214' already exists in the index 但是程式告訴我們40423214的子模組已經在裡面,所以在試著用git rm 40423214 -f 來刪除存放該子模組資料的資料夾,然後再git submodule add的一次組員倉儲的資料 Y:\\tmp\\2016fallcadp_bg6>git submodule add -b gh-pages https://github.com/40423214/2016fallcadp_hw.git 40423214 A git directory for '40423214' is found locally with remote(s): origin https://github.com/40423214/2016fallcadp_hw.git If you want to reuse this local git directory instead of cloning again from https://github.com/40423214/2016fallcadp_hw.git use the '--force' option. If the local git directory is not the correct repo or you are unsure what this means choose another name with the '--name' option. 程式告訴我們還有資料沒刪除乾淨,於是我們再執行一次刪除的指令 Y:\\tmp\\2016fallcadp_bg6>git rm 40423214 -f fatal: pathspec '40423214' did not match any files 然而程式說找不到任何有關該名稱的文件資料,後來我們發現submodule內的設定並沒有也因此刪除,要刪除submodule的設定有兩個方法 解決方法一 從SciTE打開,在2016fallcadp_bg6資料夾內的.gitmodules檔案,把該組員的子模組設定刪除後就可以存檔 [submodule \"40423206\"] path = 40423206 url = https://github.com/40423206/2016fallcadp_hw.git branch = gh-pages [submodule \"40423224\"] path = 40423224 url = https://github.com/40423224/2016fallcadp_hw.git branch = gh-pages [submodule \"2016fallcadp_hw\"] path = 2016fallcadp_hw url = https://github.com/40423226/2016fallcadp_hw.git branch = gh-pages [submodule \"40423229\"] path = 40423229 url = https://github.com/40423229/2016fallcadp_hw.git branch = gh-pages [submodule \"40423214\"] path = 40423214 url = https://github.com/40423214/2016fallcadp_hw.git branch = gh-pages [submodule \"40423216\"] path = 40423216 url = https://github.com/40423216/2016fallcadp_hw.git branch = gh-pages 如果有打下面的指令,把各組員子模組的資料抓近來,記得要把2016fallcadp_bg6\\.git\\modules裡該組員的隱藏資料夾刪掉 git submodule update --init --recursive 就可以重新執行指令,把組員的子模組加進來 git submodule add -b gh-pages https://github.com/40423214/2016fallcadp_hw.git 40423216 解決方法二 直接依序執行以下的指令 git submodule deinit asubmodule git rm asubmodule # Note: asubmodule (no trailing slash) # or, if you want to leave it in your working tree git rm --cached asubmodule 但是在2016fallcadp_bg6\\.git\\modules裡的隱藏資料夾,還是需要自己動手刪除","tags":"Misc","title":"20161021W6"},{"url":"./20161014w5.html","text":"初步認識SolveSpace","tags":"Misc","title":"20161014W5"},{"url":"./20161007w4.html","text":"設定使用者資料,讓可攜程式更方便 用2016fallcadp_bg6的名稱,建立小組倉儲","tags":"Misc","title":"20161007W4"},{"url":"./20160930w3.html","text":"複製網誌和簡報的設定檔到2016fallcadp_hw的倉儲 更改2016fallcadp_hw的README.md檔案 簡報: https://40423214.github.io/2016fallcadp_hw 網址: https://40423214.github.io/2016fallcadp_hw/blog/ 解決近端設定代理主機的問題 每次上課須執行以下指令 git config --global http.proxy http://proxy.mde.tw:3128 git config --global https.proxy http://proxy.mde.tw:3128 輸入完之後出現了這個問題 warning: http.proxy has multiple values error: cannot overwrite multiple values with a single value Use a regexp, --add or --replace-all to change http.proxy. 發現在Y:\\home的.gitconfig檔案出現問題,從SciTE打開.gitconfig [http] proxy = proxy = proxy = proxy = http://proxy.mde.tw:3128 [https] proxy = http://proxy.mde.tw:3128 [user] email = 40423214@gm.nfu.edu.tw name = 40423214 更正後儲存 [http] proxy = http://proxy.mde.tw:3128 [https] proxy = http://proxy.mde.tw:3128 [user] email = 40423214@gm.nfu.edu.tw name = 40423214","tags":"Misc","title":"20160930W3"},{"url":"./20160923w2.html","text":"建立40423214.github.io名稱的倉儲 把分支的預設值改為gh-pages","tags":"Misc","title":"20160923W2"},{"url":"./20160916w1.html","text":"利用中秋連假複習之前學過的指令 切換到2016fallcadp_hw的分支 cd 分支名稱 (例如:cd 2016fallcadp_hw) 回到上一個分支 cd .. 會新建一個40423214的資料夾,並把遠端資料存在裡面 git clone 倉儲網址 分支名稱 (例如:git clone https://github.com/40423214/2016fallcadp_hw.git 40423216) 檢查分支 git branch 建立一個gh-pages名稱的分支 git branch 分支名稱 (例如:git branch gh-pages) 切換到指定的gh-pages分支 git checkout 分支名稱 (例如:git checkout gh-pages) git add -A git commit -m\" 改版內容 \" (例如:git commit -m\"yen.leo update\") 推送進端資料到遠端,並且指定推送到gh-pages的分支 git push origin 分支名稱 (例如:git push origin gh-pages) git pull 收尋該檔案名稱,並逐一確認是否刪除 git rm 檔案名稱 回到之前072e3af的版本資料 git reset --hard 版本代碼 (例如:git reset --hard 072e3af) 直接刪除所有該檔案名稱的檔案 git rm 檔案名稱 -f","tags":"Misc","title":"20160916W1"}]};