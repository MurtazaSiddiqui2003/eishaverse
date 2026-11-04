# Eishaverse

**A Universe of Her Own.**

A private, password-protected personal website built with Next.js.

## Local development

```bash
npm install
npm run dev
```

Create a `.env.local` file:

```env
EISHAVERSE_PASSWORD=choose-a-long-private-password
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Import this GitHub repository into Vercel.
2. Add `EISHAVERSE_PASSWORD` under **Project Settings → Environment Variables**.
3. Use a strong password and keep it out of GitHub.
4. Deploy or redeploy after adding the variable.

The password is checked on the server. Successful access is represented by a signed, HTTP-only cookie. The homepage is rendered dynamically and search indexing is disabled.

## Important

The GitHub repository can remain public. Do not put personal photos, private letters, or Eisha's personal details in public source files. Add private content only after deciding how it should be stored and protected.