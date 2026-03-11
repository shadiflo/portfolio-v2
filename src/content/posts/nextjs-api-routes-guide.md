---
title: "Building REST APIs with Next.js Route Handlers"
description: "How to build clean API endpoints using Next.js App Router route handlers — CRUD, validation, error handling."
date: 2025-03-01
category: "backend"
tags: ["next.js", "api", "typescript", "rest"]
---

## Route handlers basics

In the Next.js App Router, API routes live in `app/api/` as `route.ts` files. Each file exports HTTP method functions.

```ts
// app/api/players/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const players = await db.player.findMany();
  return NextResponse.json(players);
}

export async function POST(request: Request) {
  const body = await request.json();
  const player = await db.player.create({ data: body });
  return NextResponse.json(player, { status: 201 });
}
```

## Dynamic routes

```ts
// app/api/players/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const player = await db.player.findUnique({
    where: { id: params.id },
  });

  if (!player) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(player);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await db.player.delete({ where: { id: params.id } });
  return new NextResponse(null, { status: 204 });
}
```

## Input validation

Keep it simple — validate at the boundary:

```ts
export async function POST(request: Request) {
  const body = await request.json();

  if (!body.nickname || typeof body.nickname !== 'string') {
    return NextResponse.json(
      { error: 'nickname is required' },
      { status: 400 }
    );
  }

  if (body.nickname.length < 3 || body.nickname.length > 20) {
    return NextResponse.json(
      { error: 'nickname must be 3-20 characters' },
      { status: 400 }
    );
  }

  const player = await db.player.create({
    data: { nickname: body.nickname },
  });

  return NextResponse.json(player, { status: 201 });
}
```

## Error handling pattern

```ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const player = await db.player.findUniqueOrThrow({
      where: { id: params.id },
    });
    return NextResponse.json(player);
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
```

## Key points

- One `route.ts` per endpoint path
- Export named functions matching HTTP methods: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`
- Use `NextResponse.json()` for JSON responses
- Set proper status codes
- Validate input at the boundary, trust internal code
