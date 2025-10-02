# Pegasus UI

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started on Ubuntu 22.04

These instructions are for Ubuntu 22.04 ONLY.

### 1. Install Node.js and pnpm

First, you need to install `nvm` (Node Version Manager) to manage your Node.js versions.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

After running the script, you may need to restart your terminal or run the following command:

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Now, install the latest LTS version of Node.js:

```bash
nvm install --lts
```

Next, install `pnpm`:

```bash
npm install -g pnpm
```

### 2. Clone the Repository and Install Dependencies

Clone the repository to your local machine:

```bash
git clone https://github.com/Daniel-Farmer/Pegasus-UI.git
cd Pegasus-UI
```

Install the project dependencies using `pnpm`. This will also start the development server automatically.

```bash
pnpm install
```

### 3. Access the Application

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
