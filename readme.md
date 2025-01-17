## Setup

Need this `.env`:

```
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=""
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Where:

- `BETTER_AUTH_SECRET` is [some random value](https://www.better-auth.com/docs/installation)
- `DATABASE_URL` is Postgres URL
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET` can get from google cloud console

```
bun i
```

## Run

```
bun dev
```
