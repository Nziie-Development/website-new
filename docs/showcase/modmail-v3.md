---
title: Modmail v3
description: Modmail v3, a new, easy way to communicate with server members with a fully customizable system.
sidebar_position: 1
---

import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji } from "@skyra/discord-components-react";

---

## 🎉 v3.0.0 {#why-v3}
Modmail v3 includes a robust configuration system to configure 99% of the bot's responses, leaving the sky as the limit of possibilites of how your bot can be customized to your liking, theme, or needs. v3 showcases **Discord's newest and greatest UI** while providing you a crisp low-response time. Modmail v3 is the only bot you'll ever need for user support!

:::success
Purchase Modmail v3 at <strong><a href="https://r.nziie.xyz/purchase-modmail-v3" className="discord-link">r.nziie.xyz/purchase-modmail-v3</a></strong> for as cheap as <span className="timestamp">2.25€/month</span>!
:::

## Customizable Prefix
Now, you can customize the prefix of your bot on the fly and have it update immediately. 
- `!config set prefix ?` (changes to <strong>?</strong>)

<DiscordMessages>
	<DiscordMessage>
		!config set prefix ?
	</DiscordMessage>
  <DiscordMessage author="Modmail" bot>
    <DiscordEmbed slot="embeds" color="#2ecc71" embedTitle="Success">
      <DiscordEmbedDescription slot="description">
        Set <span className="cb">prefix</span> to <span className="cb">?</span>
      </DiscordEmbedDescription>
      </DiscordEmbed>
  </DiscordMessage>
</DiscordMessages>

## Highly customizable
The system is highly customizable, giving you the power to customize it to your liking or needs. 

<details className="customdetails" open>
<summary>Configurations list</summary>
`modmail_category_id` - The category where threads are created
<br/>
`modmail_guild_id` - The guild ID of where modmail is based in.
<br/>
`log_channel` - The channel where modmail logs and update logs are sent
<br/>
`prefix` - The prefix of the bot.
<br/>
`mention` - This is the message above user information for when a new thread is created in the channel. You can use a ping here.
<br/>
`main_color` - This is the main color for Modmail (help/about/ping embed messages, subscribe, move, etc.).
<br/>
`success_color`- This is the color for Modmail when anything is successful.
<br/>
`error_color`- This is the color for Modmail when anything goes wrong, unsuccessful commands, or a stern warning.
<br/>
`mod_color` - This is the color of the messages sent by the moderators, this applies to messages within in the thread channel and the DM thread messages received by the recipient.
<br/>
`recipient_color` - This is the color of the messages sent by the recipient, this applies to messages received in the thread channel.
<br/>
`thread_creation_title` - This is the message embed title sent to the recipient upon the creation of a new thread.
<br/>
`thread_creation_response` - This is the message embed content sent to the recipient upon the creation of a new thread.
<br/>
`thread_creation_footer` - This is the message embed footer sent to the recipient upon the creation of a new thread.
<br/>
`thread_close_title` - This is the message embed title sent to the recipient upon the closure of a thread.
<br/>
`thread_close_response` - This is the message embed content sent to the recipient upon the closure of a thread.
<br/>
`thread_close_footer` - This is the message embed footer sent to the recipient upon the closure of a thread.
<br/>
`thread_move_title`- This is the message embed content sent to the recipient upon contacting a member.
<br/>
`thread_move_notify` - Notify the recipient if the thread was moved.
<br/>
`thread_move_response` - This is the title of the embed sent to the recipient upon the contacting a member.
<br/>
`thread_move_footer` - This is the message embed footer sent to the recipient upon contacting a member.
<br/>
`close_on_leave` - Closes a modmail thread upon user leave automatically
<br/>
`confirm_thread_creation` - Ensure users confirm that they want to create a new thread
<br/>
`confirm_thread_creation_title` - Title for the embed message sent to users to confirm a thread creation
<br/>
`confirm_thread_creation_response` - Description for the embed message sent to users to confirm a thread creation
<br/>
`confirm_thread_creation_accept` - Emoji to accept a thread creation
<br/>
`confirm_thread_creation_deny` - Emoji to deny a thread creation
<br/>
`disabled` - Stop accepting new Modmail threads. Users won't be able to create new threads, but existing ones will still function as expected.
<br/>
`disabled_new_threads_title` - The title of the message embed when Modmail new thread creation is disabled and user tries to create a new thread.
<br/>
`disabled_new_threads_response` - The body of the message embed when Modmail new thread creation is disabled and user tries to create a new thread.
<br/>
`disabled_new_threads_footer` - The footer of the message embed when Modmail new thread creation is disabled and user tries to create a new thread.
<br/>
`sent_emoji` - Emoji that indicates a thread message was sent
<br/>
`error_emoji` - Emoji that indicates something was unsuccessful
<br/>
`blocked_emoji` - Emoji that indicates a user is blocked from modmail
<br/>
`success_emoji` - Emoji that indicates success
<br/>
</details>

<DiscordMessages>
	<DiscordMessage>
		 !config set thread_creation_response Thanks for contacting our staff team, please wait for a response.
	</DiscordMessage>
  <DiscordMessage author="Modmail" bot>
    <DiscordEmbed slot="embeds" color="#2ecc71" embedTitle="Success">
      <DiscordEmbedDescription slot="description">
        Set <span className="cb">thread_creation_response</span> to <span className="cb">Thanks for contacting our staff team, please wait for a response.</span>
      </DiscordEmbedDescription>
      </DiscordEmbed>
  </DiscordMessage>
	<DiscordMessage>
		 !config set thread_close_response &#123;closer.mention&#125; has closed this thread.
	</DiscordMessage>
  <DiscordMessage author="Modmail" bot>
    <DiscordEmbed slot="embeds" color="#2ecc71" embedTitle="Success">
      <DiscordEmbedDescription slot="description">
        Set <span className="cb">thread_creation_response</span> to <span className="cb">&#123;closer.mention&#125; has closed this thread.</span>
      </DiscordEmbedDescription>
      </DiscordEmbed>
  </DiscordMessage>
	<DiscordMessage>
		 !config set success_emoji ☑
	</DiscordMessage>
  <DiscordMessage author="Modmail" bot>
    <DiscordEmbed slot="embeds" color="#2ecc71" embedTitle="Success">
      <DiscordEmbedDescription slot="description">
        Set <span className="cb">success_emoji</span> to ☑
      </DiscordEmbedDescription>
      </DiscordEmbed>
  </DiscordMessage>
</DiscordMessages>

## Integrated Menus System
The thread menu system allows users who are creating a thread to choose from preset options set by admins. Depending on which option they select, the thread will move itself to a category set by *you*, in the option settings.

### Adding options

<DiscordMessages>
  <DiscordMessage profile="nziie" roleColor="none">
  !menu options add
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#5865f2">
      Please send what you want the dropdown option label to be.
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie" roleColor="none">
  Report User
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#5865f2">
      Please send the description you would like to be displayed in the option. Use 'none' for no description.
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie" roleColor="none">
  Report a user (not staff member) for breaking server rules.
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#5865f2">
      Please send the category ID you would like the thread to be sent to. Use 'none' for the thread not to be moved.
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie" roleColor="none">
  1089262352530161684
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#2ecc71" embedTitle="Success">
      Successfully created menu option!<br/><br/><blockquote><strong>Label:</strong> Report User<br/><strong>Description:</strong> Report a user (not staff member) for breaking server rules.<br/><strong>Move to:</strong> 1089262352530161684</blockquote>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordMessages>

### How it looks

<img className="betterimage" src="https://cdn.nziie.is-a.dev/u/files/7thrGbvIIjhs"/>

---
You can have as many options as you'd like, as long as it doesn't exceed the Discord select menu option limit.

## Thread Logging

v3 showcases enhanced thread logging. You can manage the *global thread logs* with the <span className="cb">!logs</span> command and sub-commands.

### Discord-Styled Logs
Yup! No gloomy Pastebin logs anymore, v3 uses [logs.discord.website](https://logs.discord.website) that uses Discord styles. The entire thread history is uploaded to the website for ease of use and makes it easier to view later (your data is 100% safe).

## Permission Levels
v3 uses permission levels to decide which user can use what command.


## Conclusion
Improvements are being made to v3, so if you have a v1 or v2 modmail bot, you will need to [pay $2 USD](https://redirect.nziie.is-a.dev/donate) for your bot to be migrated to v3. This includes me manually transferring any snippets you have, or other configurations you want saved in v3; which is a pain.

:::success
Purchase Modmail v3 at <strong><a href="https://r.nziie.xyz/purchase-modmail-v3" className="discord-link">r.nziie.xyz/purchase-modmail-v3</a></strong> for as cheap as <span className="timestamp">2.25€/month</span>!
:::

:::info
You will need to join my development server in order to purchase this new system. <a href="https://discord.gg/b9GPHgJ6TK" className="discord-link">Join here</a>.
:::



## Full Commands List {#commands-list}
| Name | Description |
| ----- | ----- |
| `!anonreply <message>` | Reply to a modmail thread anonymously |
| `!move <category_name>` | Move a modmail thread |
| `!logging [user]` | Get previous Modmail thread logs of a member, or all if user isn't provided. |
| `!logging delete [user]` | Wipe a log entry from the database, don't provide a log ID to wipe all. |
| `!help [command]` | Shows this message |
| `!contact <member>` | Contact a user |
| `!block [user] [reason]` | Block a user from modmail, reason is optional and is **not** shown to the user. |
| `!close [time] [message]` | Close a thread with an optional time argument |
| `!close cancel` | Cancel a closure |
| `!status` | Customize the bot's status loop |
| `!status remove ` | Remove an entry to the bot's status loop |
| `!status add ` | Add an entry to the bot's status loop |
| `!snippet [name]` | Invoke a snippet |
| `!snippet remove [name]` | Remove a snippet |
| `!snippet add [name]` | Add a snippet |
| `!reply <message>` | Reply to a modmail thread |
| `!config` | Manage configurations for the bot. |
| `!config list ` | None |
| `!config set ` | Set a configuration variable and its value |
| `!menu ` | Customize options users can select when creating a Modmail thread. |
| `!menu embed_text ` | Set the text that is displayed in the embed of the menu message. |
| `!menu enable ` | Enable the thread menu. |
| `!menu dropdown_placeholder ` | Set the text that is displayed in the dropdown menu. |
| `!menu disable ` | Disable the thread menu. |
| `!menu options ` | Manage options for the Modmail menu |
| `!alert [member]` | Get notified of the next thread message |
| `!unblock [user]` | Unblock a user from modmail. |
| `!permissions ` | Manage permissions for each permission level |
| `!permissions view ` | View the roles for all permission levels |
| `!permissions add ` | Add a role to a permission level. Permission levels: `OWNER`, `ADMIN`, `MODERATOR`, `SUPPORTER`, and `REGULAR` |
| `!permissions remove ` | Remove a role from a permission level. Permission levels: `OWNER`, `ADMIN`, `MODERATOR`, `SUPPORTER`, and `REGULAR` |

