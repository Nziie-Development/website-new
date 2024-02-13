---
title: Modmail Guide
description: The modmail guide for Molten Advertising (staff only)
unlisted: true
---

import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji } from "@skyra/discord-components-react";

:::tip
In this guide you will learn how to use and operate <a href="https://discord.gg/gbFJm7D7BJ">Molten Support</a>. <a href="https://discord.gg/gbFJm7D7BJ">Molten Support</a>'s prefix is <span className="timestamp">.</span> [<strong>period</strong>]
:::
<br/>
<br/>
<details className="customdetails">
<summary>🔑 Key</summary>

> `[foo|bar]` - Text separated in brackets means you can use either **foo** or **bar** to get the same command result

> `[arg=value]` - An argument in brackets means this is an **optional argument**, if it's not provided a default value of '**value**' will take it's place

> `<arg>` - An argument in less and greater than signs means that this is a **required argument**, it must be provided or the command will fail

</details>


## Modmail Commands
|     Usage               |  Description   |
| ----------------------- | ----------- |
| <span className="mention">.[reply\|r] &lt;message&gt</span> | Reply to a modmail thread (this is an non anonymous reply) |
| <span className="mention">.[anonreply\|ar] &lt;message&gt</span> | Reply to a modmail thread (this is an anonymous reply) |
| <span className="mention">.[close\|c] <a></a>[time] <a></a>[message]</span> | Close a thread with an optional duration to wait to close the thread (timed close) - `message` will appear on the user's end. This can be 'Have a great day' |
| <span className="mention">.[close\|c] cancel <a></a>[time] <a></a>[message]</span> | Cancel a closeure of the thread |
| <span className="mention">.[alert\|notify] [member]</span> | Notify yourself or another member of the next thread messaged received |
| <span className="mention">.move &lt;name&gt</span> | Move a thread to a category by name |
| <span className="mention">.contact [member]</span> | Contact a member |

<div className="box green no-background" style={{'padding-bottom': '0'}}>
<span className="timestamp">category_name</span> can be a shorthand word of a category name.

For example, you can use <span className="mention">.move moderation</span> to move a thread to the moderation team.
</div>

## Snippet Commands
|     Usage               |  Description   |
| ----------------------- | ----------- |
| `.snippets`| View all the snippets or view one's content |
| `.<snippet_name>` | Invoke a snippet by name |
| `.snippet add <name> <value>` | (Management Only) Add a snippet |
| `.snippet remove &lt;name&gt`  | (Management Only) Remove/delete a snippet |

## Modmail Moderation Commands
|     Usage               |  Description   |
| ----------------------- | ----------- |
| `.[block] [member] [reason]` | This will block a user from being able to use the modmail |
| `.[unblock] [member]` | This will unblock a user to being able to use the modmail again |

### Any other commands you may be confused with, check out [The Modmail v3 post](/docs/showcase/modmail-v3.md) for more info!

## Modmail Rules
**1.** When a thread is made, all online staff will get pinged. **To claim a thread, use the `.claim` command**, other staff should obey that you claimed the thread. If you’re inactive in a thread for a few hours when a user responds, they have the right to 'overclaim.'

**2.** There is such a thing as "over-claiming" where you claim a claimed thread. **You can only overclaim if you are a management member and need your serious intervention**, you were asked by the person who originally claimed the ticket to claim or if the person who claimed it isn't responding to your ping after 6 hours. Overclaim for no good reason will get you a strike or your modmail permissions revoked for a duration of time.

**3.** When handling a thread, **remain professional at all times**. **Don't use shortened words** such as "**k**" or "**xD**" or "**lol**". That doesn't look very professional. With this, capitalization and grammar must be used as well. 

**4.** <u>Stay respectful at all times</u>. Everyone must be treated with respect regardless of their words. In this case, ping an online management member.

**5.** If someone reported a member, you aren't supposed to be sharing the actions. Use the proper snippets according to the situation. You may not tell a thread user **any** actions against anyone. If you do this, you may receive a staff strike or your modmail license will be **revoked**.

**6.** Move a thread to the correct team category with `.move <team>`. Please don't handle threads that aren't for your department. 

---

## Ready to handle threads?
Message <span className="mention">/form</span> <code>Modmail Test</code> in the staff server, and you will receive a direct message from Server Manager if you passed or not!
