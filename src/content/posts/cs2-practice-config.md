---
title: "CS2 Practice Config — Nades, Bots, and Workshop"
description: "Complete practice config for CS2 with grenade trajectories, infinite ammo, bot controls, and useful binds."
date: 2025-01-05
category: "gaming"
tags: ["cs2", "practice", "config", "nades", "workshop"]
---

## Quick start

Paste this into console or save as `practice.cfg`:

```
sv_cheats true
mp_warmup_end
mp_freezetime 0
mp_roundtime_defuse 60
mp_roundtime 60
mp_buy_anywhere 1
mp_buytime 9999
mp_maxmoney 999999
mp_startmoney 999999
mp_restartgame 1
```

Then load it with `exec practice` in console.

## Grenade practice

```
sv_grenade_trajectory_prac_pipreview true
sv_grenade_trajectory_prac_trailtime 15
sv_infinite_ammo 1
ammo_grenade_limit_total 5
mp_death_drop_grenade 0
```

This shows grenade trajectories with the preview line and keeps them visible for 15 seconds.

## Bot controls

```
// Remove all bots
bot_kick

// Add a bot and freeze it (for peeking practice)
bot_add_t
bot_stop 1
bot_dont_shoot 1

// Place bot at your crosshair
bot_place
```

## Useful binds for practice

```
// Toggle noclip with N
bind n noclip

// Rethrow last grenade with T
bind t "sv_rethrow_last_grenade"

// Teleport bind — save position with F5, load with F6
bind F5 "setpos_player_save"
bind F6 "setpos_player_load"
```

## Workshop maps

Best workshop maps for practice:

- **Yprac** maps — preloaded lineups for every map
- **Aim Botz** — aim training with configurable bots
- **Recoil Master** — spray pattern practice
- **Prefire maps** — practice common angles

Load workshop maps from the main menu or with:

```
map workshop/<map_id>
```

## Full practice.cfg

Here's the complete file ready to use:

```
// Practice Config
sv_cheats true
mp_warmup_end
mp_freezetime 0
mp_roundtime_defuse 60
mp_roundtime 60
mp_buy_anywhere 1
mp_buytime 9999
mp_maxmoney 999999
mp_startmoney 999999
sv_grenade_trajectory_prac_pipreview true
sv_grenade_trajectory_prac_trailtime 15
sv_infinite_ammo 1
ammo_grenade_limit_total 5
mp_death_drop_grenade 0
bind n noclip
bind t "sv_rethrow_last_grenade"
mp_restartgame 1
```

Save it to `csgo/cfg/practice.cfg` and run `exec practice` whenever you need it.
