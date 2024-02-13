(self.webpackChunknziie_xyz=self.webpackChunknziie_xyz||[]).push([[7068],{6604:(e,n,s)=>{"use strict";s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(7624),i=s(4552),o=s(5416);const r={title:"Buttons",description:"Discord buttons in Pycord"},d=void 0,c={id:"pycord-examples/discord-ui/buttons",title:"Buttons",description:"Discord buttons in Pycord",source:"@site/docs/pycord-examples/discord-ui/buttons.md",sourceDirName:"pycord-examples/discord-ui",slug:"/pycord-examples/discord-ui/buttons",permalink:"/pycord-examples/discord-ui/buttons",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Buttons",description:"Discord buttons in Pycord"},sidebar:"defaultSidebar",previous:{title:"Discord UI",permalink:"/category/discord-ui"},next:{title:"Modals",permalink:"/pycord-examples/discord-ui/modals"}},a={},l=[{value:"Output",id:"output",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["I recommend ",(0,t.jsx)(n.a,{href:"../subclassing",children:"subclassing"})," here!"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Credit: ",(0,t.jsx)(n.a,{href:"https://github.com/Pycord-Development/pycord/blob/master/examples/views/confirm.py",children:"https://github.com/Pycord-Development/pycord/blob/master/examples/views/confirm.py"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'import discord\nfrom discord.ext import commands\n\nclass Confirm(discord.ui.View):\n  def __init__(self, author: discord.User):\n    self.author = author # this is what you will set when defining the view in your other code: this user object that is the person that invoked the command or event and that person will be the only one confirming/canceling\n    super().__init__(timeout=30) # you can edit this to whatever you want in SECONDS\n    self.value = None\n    # AND THEN YOU CAN DO:\n    # view = Confirm(author=myauthorobject)\n    # await view.wait()\n    # if view.value == "Yes":\n    # (do something)\n    # if view.value == "No":\n    # (do something)\n\n    async def on_timeout(self): # if you don\'t want this, remove it. you will need to do `view.message = myMessageObject` after doing view = Confirm(author=myauthorobject)\n      for child in self.children:\n        child.disabled = True # making all the components on the message disabled\n      await self.message.edit(content="Timeout exceeded!", view=self) # if you want, you can pass in \'embed=None\' to make sure that the message edits itself with no embed.\n\n    async def interaction_check(self, interaction: discord.Interaction) -> bool: # you have to retuen this as a bool object or it wont work\n      if interaction.user != self.author: # accessing the discord.User object we set earlier\n        await interaction.response.send_message("This is not for you.", ephemeral=True)\n        return False\n      else:\n        return True\n\n    @discord.ui.button(label="Yes", style=discord.ButtonStyle.green)\n    async def confirm(self, button, interaction):\n      self.disable_all_items()\n      self.value = "Yes"\n      self.stop()\n\n    @discord.ui.button(label="No", style=discord.ButtonStyle.red)\n    async def cancel(self, button, interaction):\n      self.disable_all_items()\n      self.value = "No"\n      self.stop()\n    \n\n# somewhere else\n\nclass MyCog(commands.Cog):\n  def __init__(self, bot):\n    self.bot = bot\n  \n  @commands.command()\n  async def confirm(self, ctx):\n    view = Confirm(author=ctx.author) # defining view and setting author\n    message = await ctx.send("Would you like to confirm?", view=view)\n    view.message = message\n    await view.wait()\n    if view.value == "Yes":\n      await view.message.edit(content=f"You confirmed with {view.value}!", view=view) # we edit view to view because the buttons have been disabled in the class when the user clicks a button\n    if view.value == "No":\n      await view.message.edit(content=f"You canceled with {view.value}!", view=view)\n\ndef setup(bot):\n  bot.add_cog(MyCog(bot))\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,t.jsxs)(o.yc,{children:[(0,t.jsx)(o.O6,{children:(0,t.jsx)(n.p,{children:"!send"})}),(0,t.jsxs)(o.O6,{bot:!0,children:[(0,t.jsx)(n.p,{children:"Would you like to send the message?"}),(0,t.jsx)(o.gF,{slot:"components",children:(0,t.jsxs)(o.Ok,{children:[(0,t.jsx)(o.s,{type:"success",children:(0,t.jsx)(n.p,{children:"Yes"})}),(0,t.jsx)(o.s,{type:"destructive",children:(0,t.jsx)(n.p,{children:"No"})})]})})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"When 'Yes' is clicked..."})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(o.yc,{children:[(0,t.jsx)(o.O6,{children:(0,t.jsx)(n.p,{children:"!send"})}),(0,t.jsxs)(o.O6,{bot:!0,children:[(0,t.jsx)(n.p,{children:"Would you like to send the message?"}),(0,t.jsx)(o.gF,{slot:"components",children:(0,t.jsxs)(o.Ok,{children:[(0,t.jsx)(o.s,{type:"success",disabled:!0,children:(0,t.jsx)(n.p,{children:"Yes"})}),(0,t.jsx)(o.s,{type:"destructive",disabled:!0,children:(0,t.jsx)(n.p,{children:"No"})})]})})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://docs.pycord.dev/en/master/api.html#discord.ui.Button",className:"discord-link",children:"Button Documentation"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://docs.pycord.dev/en/master/api.html#discord.ui.View",className:"discord-link",children:"View Documentation"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://docs.pycord.dev/en/master/api.html#discord.ButtonStyle",className:"discord-link",children:"Button Style Documentation"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1692:(e,n,s)=>{var t={"./discord-action-row_29.cjs.entry.js":9892};function i(e){var n=o(e);return s(n)}function o(e){if(!s.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=o,e.exports=i,i.id=1692}}]);