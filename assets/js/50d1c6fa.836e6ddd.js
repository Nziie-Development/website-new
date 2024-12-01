"use strict";(self.webpackChunknziie_xyz=self.webpackChunknziie_xyz||[]).push([[7692],{8572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=t(7624),s=t(4552);const i={title:"Selects",description:"Discord selects (dropdowns) in Pycord"},r=void 0,c={id:"pycord-examples/discord-ui/selects",title:"Selects",description:"Discord selects (dropdowns) in Pycord",source:"@site/docs/pycord-examples/discord-ui/selects.md",sourceDirName:"pycord-examples/discord-ui",slug:"/pycord-examples/discord-ui/selects",permalink:"/pycord-examples/discord-ui/selects",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Selects",description:"Discord selects (dropdowns) in Pycord"},sidebar:"defaultSidebar",previous:{title:"Modals",permalink:"/pycord-examples/discord-ui/modals"},next:{title:"Subclassing",permalink:"/pycord-examples/subclassing"}},d={},a=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["I recommend ",(0,o.jsx)(n.a,{href:"../subclassing",children:"subclassing"})," here!"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'import discord\nfrom discord.ext import commands\n\nclass Select(discord.ui.View):\n  def __init__(self, author: discord.User):\n    self.author = author # this is what you will set when defining the view in your other code: this user object that is the person that invoked the command or event and that person will be the only one confirming/canceling\n  async def interaction_check(self, interaction): # check if the interaction user is the same as the command author\n    if interaction.user != self.author:\n      await interaction.response.send_message(\'This interaction is not for you!\', ephemeral=True)\n      return False\n    return True\n\n  @discord.ui.select(placeholder="Select color...", options=[discord.SelectOption(label="Red", emoji="\ud83d\udd34", description="The color red"), discord.SelectOption(label="Green", emoji="\ud83d\udfe2", description="The color green"), discord.SelectOption(label="Blue", emoji="\ud83d\udd35", description="The color blue")])\n  async def select_callback(self, select, interaction):\n    await interaction.response.send_message(f"Your favorite color is **{select.values[0].label}**!", ephemeral=True)\n\nbot = commands.Bot(command_prefix="!")\n\n@bot.command()\nasync def color(ctx):\n  view = Select(author=ctx.author)\n  await ctx.send("Select your favorite color from the dropdown below!", view=view)\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://docs.pycord.dev/en/master/api.html#discord.ui.Select",className:"discord-link",children:"Selects Documentation"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://docs.pycord.dev/en/master/api.html#discord.ui.View",className:"discord-link",children:"View Documentation"})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>r});var o=t(1504);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);