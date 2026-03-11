---
title: "CS2 Autoexec Config — The Complete Setup Guide"
description: "My personal CS2 autoexec.cfg with crosshair, viewmodel, network settings, and keybinds. Copy-paste ready."
date: 2024-12-15
category: "gaming"
tags: ["cs2", "config", "autoexec", "settings"]
---

## What is an autoexec?

An `autoexec.cfg` is a config file that CS2 loads every time you start the game. It's the best way to make sure your settings stick — crosshair, viewmodel, network, keybinds, everything.

## File location

Place your `autoexec.cfg` here:

```
C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg\autoexec.cfg
```

## My config

### Crosshair

```
cl_crosshairsize 1.5
cl_crosshairgap -3
cl_crosshairthickness 0
cl_crosshaircolor 1
cl_crosshair_drawoutline 0
cl_crosshairdot 0
cl_crosshaircolor_r 0
cl_crosshaircolor_g 255
cl_crosshaircolor_b 0
```

### Viewmodel

```
viewmodel_fov 68
viewmodel_offset_x 2.5
viewmodel_offset_y 0
viewmodel_offset_z -1.5
viewmodel_presetpos 0
```

### Network

```
rate 786432
cl_interp_ratio 1
cl_interp 0
cl_cmdrate 128
cl_updaterate 128
```

### Keybinds

```
bind mwheeldown +jump
bind c +jump
bind mouse4 +voicerecord
bind mouse5 player_ping
```

### Audio

```
snd_headphone_pan_exponent 2
snd_headphone_pan_radial_weight 2
snd_musicvolume 0
```

## How to use

1. Create `autoexec.cfg` in the path above
2. Paste the settings you want
3. Add `host_writeconfig` at the very end
4. In Steam, set launch option: `+exec autoexec.cfg`

That's it. Every time CS2 launches, your settings load automatically.
