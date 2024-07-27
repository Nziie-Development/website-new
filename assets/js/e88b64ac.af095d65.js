"use strict";(self.webpackChunknziie_xyz=self.webpackChunknziie_xyz||[]).push([[1168],{1340:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var d=s(7624),t=s(4552);const i={title:"Modals",description:"Discord modals (forms) in Pycord"},o=void 0,r={id:"pycord-examples/discord-ui/modals",title:"Modals",description:"Discord modals (forms) in Pycord",source:"@site/docs/pycord-examples/discord-ui/modals.md",sourceDirName:"pycord-examples/discord-ui",slug:"/pycord-examples/discord-ui/modals",permalink:"/pycord-examples/discord-ui/modals",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Modals",description:"Discord modals (forms) in Pycord"},sidebar:"defaultSidebar",previous:{title:"Buttons",permalink:"/pycord-examples/discord-ui/buttons"},next:{title:"Selects",permalink:"/pycord-examples/discord-ui/selects"}},l={},a=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["I recommend ",(0,d.jsx)(n.a,{href:"../subclassing",children:"subclassing"})," here!"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-py",metastring:'title="main.py"',children:"class MyModal(discord.ui.Modal):\n  def __init__(self):\n    super().__init__(title='Modal Title') # You MUST include a title!\n    self.add_item(discord.ui.InputText(label='Long input', style=discord.InputTextStyle.long))\n    self.add_item(discord.ui.InputText(label='Short input', style=discord.InputTextStyle.short))\n  async def callback(self, interaction):\n    embed = discord.Embed(color=discord.Colour.blurple())\n    for child in self.children:\n      embed.add_field(name=child.label, value=child.value) # this will add an embed field for every input given in the modal\n    await interaction.response.send_message(embed=embed, ephemeral=True)\n\n@client.slash_command(name=\"modal\")\nasync def modal(ctx):\n  MODAL = MyModal()\n  await ctx.interaction.response.send_modal(MODAL) # you *CAN NOT* send a modal in `ctx.respond`\n"})}),"\n",(0,d.jsxs)(n.admonition,{type:"info",children:[(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"https://docs.pycord.dev/en/master/api.html#discord.ui.Modal",className:"discord-link",children:"Modal Documentation"})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:"https://docs.pycord.dev/en/master/api.html#discord.InteractionResponse.send_modal",className:"discord-link",children:[(0,d.jsx)("span",{className:"timestamp",children:".send_modal"})," Documentation"]})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"https://docs.pycord.dev/en/master/api.html#discord.ui.InputText",className:"discord-link",children:"Text Input Documentation"})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"https://docs.pycord.dev/en/master/api.html#discord.InputTextStyle",className:"discord-link",children:"Text Input Style Documentation"})})]})]})}function m(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>o});var d=s(1504);const t={},i=d.createContext(t);function o(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);