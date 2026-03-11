---
title: "Building a FACEIT Discord Bot from Scratch"
description: "Step-by-step guide to building a Discord bot that pulls FACEIT stats, tracks matches, and posts live results."
date: 2025-01-20
category: "gaming"
tags: ["discord", "faceit", "bot", "node.js", "api"]
---

## What we're building

A Discord bot that:
- Looks up player FACEIT stats with a command
- Tracks live matches for registered players
- Posts match results automatically to a channel

## Prerequisites

- Node.js 18+
- A Discord bot token ([Discord Developer Portal](https://discord.com/developers/applications))
- A FACEIT API key ([FACEIT Developer Portal](https://developers.faceit.com/))

## Project setup

```bash
mkdir faceit-bot && cd faceit-bot
npm init -y
npm install discord.js axios dotenv
```

Create your `.env`:

```
DISCORD_TOKEN=your_bot_token
FACEIT_API_KEY=your_api_key
GUILD_ID=your_server_id
```

## Basic bot structure

```js
// index.js
const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const faceit = axios.create({
  baseURL: 'https://open.faceit.com/data/v4',
  headers: { Authorization: `Bearer ${process.env.FACEIT_API_KEY}` },
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
```

## Adding the /stats command

```js
// Register command
const statsCmd = new SlashCommandBuilder()
  .setName('stats')
  .setDescription('Get FACEIT stats for a player')
  .addStringOption(opt =>
    opt.setName('nickname').setDescription('FACEIT nickname').setRequired(true)
  );

// Handle interaction
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName !== 'stats') return;

  const nickname = interaction.options.getString('nickname');
  await interaction.deferReply();

  try {
    const { data: player } = await faceit.get(`/players?nickname=${nickname}`);
    const { data: stats } = await faceit.get(
      `/players/${player.player_id}/stats/cs2`
    );

    const seg = stats.segments[0]?.stats;

    await interaction.editReply({
      embeds: [{
        title: `${player.nickname} — Level ${player.games.cs2.faceit_elo}`,
        fields: [
          { name: 'ELO', value: String(player.games.cs2.faceit_elo), inline: true },
          { name: 'K/D', value: seg?.['Average K/D Ratio'] ?? 'N/A', inline: true },
          { name: 'Win Rate', value: seg?.['Win Rate %'] ? `${seg['Win Rate %']}%` : 'N/A', inline: true },
          { name: 'Matches', value: seg?.Matches ?? 'N/A', inline: true },
        ],
        color: 0xf97316,
      }],
    });
  } catch {
    await interaction.editReply('Player not found or API error.');
  }
});
```

## Next steps

- Add match tracking with webhooks
- Store player registrations in a database (PostgreSQL + Prisma)
- Build an ELO graph over time
- Add team balance calculator for 10-mans

I'll cover match tracking and webhooks in part 2.
