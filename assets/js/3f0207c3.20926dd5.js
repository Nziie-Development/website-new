"use strict";(self.webpackChunknziie_xyz=self.webpackChunknziie_xyz||[]).push([[6914],{5624:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=s(7624),a=s(4552);const o={slug:"python-classes",title:"Python Classes & Usages",description:"What are Python classes and how do you use them?",authors:"nziie",tags:["Guides"]},r=void 0,i={permalink:"/website-new/blog/python-classes",source:"@site/blog/2022-10-16-python-classes.md",title:"Python Classes & Usages",description:"What are Python classes and how do you use them?",date:"2022-10-16T00:00:00.000Z",formattedDate:"October 16, 2022",tags:[{label:"Guides",permalink:"/website-new/blog/tags/guides"}],readingTime:2.05,hasTruncateMarker:!1,authors:[{name:"Nziie",title:"who?",url:"https://nziie.xyz",imageURL:"https://github.com/Nzii3.png",key:"nziie"}],frontMatter:{slug:"python-classes",title:"Python Classes & Usages",description:"What are Python classes and how do you use them?",authors:"nziie",tags:["Guides"]},unlisted:!1,prevItem:{title:"MEE6 Controversy & Explanation",permalink:"/website-new/blog/mee6-controversy"}},l={authorsImageUrls:[void 0]},c=[{value:"What are Python classes?",id:"what-are-python-classes",level:2},{value:"Breakdown",id:"breakdown",level:2},{value:"Functions Setting Attributes",id:"functions-setting-attributes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9744).c+"",width:"1006",height:"537"})}),"\n",(0,t.jsx)(n.h2,{id:"what-are-python-classes",children:"What are Python classes?"}),"\n",(0,t.jsxs)(n.p,{children:['To put it simply, Python classes are like an object constructor or a "',(0,t.jsx)(n.em,{children:"blueprint"}),'" for creating objects. You can also create a class to organize commands or event listeners and load them later using ',(0,t.jsx)(n.a,{href:"https://pycord.dev",children:"Pycord"})," or ",(0,t.jsx)(n.a,{href:"https://discord.js.org",children:"discord.js"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"breakdown",children:"Breakdown"}),"\n",(0,t.jsxs)(n.p,{children:["Lets break down a simple class of a ",(0,t.jsx)(n.strong,{children:"Car"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"So here is our code that we're working with..."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",metastring:'title="car.py"',children:"class Car:\n  # highlight-start\n  def __init__(self, year, made, model): # When you use 'Car()' you will pass\n    # in these values that are set in the class\n    self.year = year\n    self.made = made\n    self.model = model\n  # highlight-end\n\n  def start(self):\n    print('Vrrroooooooooommmm!!!')\n  \n  def turn_off(self):\n    print('*Powering down...*')\n\n  def year_made(self):\n    return self.year\n\n  def month_made(self):\n    return self.made\n\n  def show_model(self):\n    return self.model\n\n# highlight-start\nmy_car = Car(2000, 'December', 'Lexus') # Create the car from the class\n# Setting the year to 2000, the month to 'December' and\n# and the model to 'Lexus'\n# highlight-end\nmy_car.start() # >>> 'Vrrroooooooooommmm!!!'\nmy_car.year_made() # >>> 2022\nmy_car.show_model() # >>> 'Lexus'\nmy_car.month_made() # >>> 'December'\nmy_car.turn_off() # >>> '*Powering down...*'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The class ",(0,t.jsx)("span",{className:"timestamp",children:"Car"})," has some functions being ",(0,t.jsx)("span",{className:"timestamp",children:"start"}),", ",(0,t.jsx)("span",{className:"timestamp",children:"turn_off"}),", ",(0,t.jsx)("span",{className:"timestamp",children:"year_made"}),", ",(0,t.jsx)("span",{className:"timestamp",children:"month_made"}),", and ",(0,t.jsx)("span",{className:"timestamp",children:"show_model"}),". All of these functions return or print a value from the class, the values being the attributes of the class (",(0,t.jsx)("span",{className:"timestamp",children:"year"}),", ",(0,t.jsx)("span",{className:"timestamp",children:"made"}),", and ",(0,t.jsx)("span",{className:"timestamp",children:"model"}),"). You can access these attributes by doing ",(0,t.jsx)(n.code,{children:"car.year"}),", etc."]}),"\n",(0,t.jsxs)(n.p,{children:["If you're using ",(0,t.jsx)(n.strong,{children:"Pycord"})," or ",(0,t.jsx)(n.strong,{children:"discord.py"})," it would look something like this..."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",metastring:'title="mycog.py"',children:"import discord\nfrom discord.ext import commands\n\nclass MyCog(commands.Cog):\n  def __init__(self, bot):\n    self.bot = bot # you can access your bot object here\n  \n  ### stuff ###\n\ndef setup(bot):\n  bot.add_cog(MyCog(bot))\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then in your main.py or bot.py file..."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",metastring:'title="main.py"',children:"# ...\n\n# if you have your cog file in a 'cogs' folder:\nbot.load_extension('cogs.mycog')\n# if you don't:\nbot.load_extension('mycog')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"functions-setting-attributes",children:"Functions Setting Attributes"}),"\n",(0,t.jsx)(n.p,{children:"You can even make functions to set attributes within the class."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",metastring:'title="car.py"',children:"class Car:\n  def __init__(self, year, made, model):\n    self.year = year\n    self.made = made\n    self.model = model\n\n  def start(self):\n    print('Vrrroooooooooommmm!!!')\n  \n  def turn_off(self):\n    print('*Powering down...*')\n\n  def year_made(self):\n    return self.year\n\n  def month_made(self):\n    return self.made\n\n  def show_model(self):\n    return self.model\n\n  # highlight-start\n  def set_year(self, year):\n    self.year = year\n    print(f'Set year to: {year}')\n  # highlight-end\n\nmy_car = Car(2000, 'December', 'Lexus')\n# highlight-start\nmy_car.year_made() # >>> 2000\nmy_car.set_year(2005) # >>> 'Set year to: 2005'\nmy_car.year_made() # >>> 2005\n# highlight-end\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Make sure you have correct syntax in or you will get an error!"})})]})}function m(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9744:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/car_example-4336e73e932c2c05ad68da93d8e2c393.png"},4552:(e,n,s)=>{s.d(n,{I:()=>i,M:()=>r});var t=s(1504);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);