---
title: "TeamSpeak 3 Server Setup + Permissions Guide"
description: "How to install and configure a TeamSpeak 3 server on Linux, set up permissions, channels, server groups and security."
date: 2025-02-10
category: "gaming"
tags: ["teamspeak", "ts3", "linux", "server", "permissions"]
---

## Installing TS3 on Linux (Ubuntu/Debian)

### 1. Create a user

```bash
sudo adduser --disabled-login teamspeak
sudo su - teamspeak
```

### 2. Download and extract

```bash
wget https://files.teamspeak-services.com/releases/server/3.13.7/teamspeak3-server_linux_amd64-3.13.7.tar.bz2
tar xjf teamspeak3-server_linux_amd64-3.13.7.tar.bz2
cd teamspeak3-server_linux_amd64
```

### 3. Accept the license

```bash
touch .ts3server_license_accepted
```

### 4. First start

```bash
./ts3server_startscript.sh start
```

> **Important:** On first start it will print the **Server Admin Token** and **ServerQuery password**. Save these immediately — you'll need the admin token to claim admin on your server.

## Auto-start with systemd

Create `/etc/systemd/system/teamspeak.service`:

```ini
[Unit]
Description=TeamSpeak 3 Server
After=network.target

[Service]
User=teamspeak
WorkingDirectory=/home/teamspeak/teamspeak3-server_linux_amd64
ExecStart=/home/teamspeak/teamspeak3-server_linux_amd64/ts3server_minimal_runscript.sh
ExecStop=/home/teamspeak/teamspeak3-server_linux_amd64/ts3server_startscript.sh stop
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable teamspeak
sudo systemctl start teamspeak
```

## Setting up permissions

### Server Groups

The key server groups you should create:

| Group | Power | Description |
|-------|-------|-------------|
| Owner | 100 | Full control |
| Admin | 75 | Manage users, channels, bans |
| Moderator | 50 | Kick, move, temp-ban |
| Member | 25 | Join all public channels |
| Guest | 10 | Limited access |

### Channel structure

A clean channel layout:

```
── Welcome / Info
── General
   ├── Lobby
   ├── Gaming
   └── Chill
── Competitive
   ├── Team 1
   ├── Team 2
   └── Practice
── Staff
   ├── Admin Room
   └── Mod Room
── AFK
```

### Key permission nodes

- `b_virtualserver_modify_*` — Server settings (Owner/Admin only)
- `b_channel_create_*` — Channel creation
- `i_channel_needed_join_power` — Set on channels to restrict access
- `b_client_kick_from_*` — Kick permissions
- `b_client_ban_*` — Ban permissions
- `i_client_talk_power` — Who can talk in moderated channels

### Tips

- Set `i_group_needed_modify_power` higher than the group's own power to prevent self-promotion
- Use **channel groups** (not just server groups) for per-channel roles like tournament captains
- Enable anti-flood: set `i_client_needed_serverquery_view_power` to 75+ to hide ServerQuery from regular users

## Security basics

1. Change the default ServerQuery password
2. Set a strong server password for private access
3. Use the firewall: only open ports 9987/UDP (voice), 30033/TCP (file transfer), 10011/TCP (query)
4. Keep the server updated
5. Regularly review the ban list and server logs
