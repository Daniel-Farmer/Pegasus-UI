# Pegasus UI

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started on Ubuntu 22.04

These instructions are for a fresh installation on Ubuntu 22.04.

### Prerequisite: Install curl
Before running the automated script, ensure `curl` is installed on your system. Most systems have it, but you can install it with the following command:
```bash
sudo apt update && sudo apt install curl -y
```

### Automated Installation

Run the following command in your terminal to download and execute the installation script. This will set up your environment by installing Node.js, pnpm, and other required dependencies.

```bash
bash <(curl -s https://raw.githubusercontent.com/Daniel-Farmer/Pegasus-UI/master/scripts/install_ubuntu.sh)
```

After the script finishes, **close and reopen your terminal**, then proceed to the next step.

### Clone the Repository and Install Dependencies

Clone the repository to your local machine:

```bash
git clone https://github.com/Daniel-Farmer/Pegasus-UI.git
cd Pegasus-UI
```

Install the project dependencies using `pnpm`:

```bash
pnpm install
```

### Access the Application

The `pnpm install` command will also start the development server. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

## Deploying on an Ubuntu 22.04 VPS

To deploy this application on a VPS, you will need to build it for production and use a process manager like `pm2` to keep it running.

### 1. Build the Application

First, build the application for production:

```bash
pnpm build
```

### 2. Install pm2

`pm2` is a process manager for Node.js applications. Install it globally:

```bash
pnpm install -g pm2
```

### 3. Start the Application with pm2

Start the application using `pm2`:

```bash
pm2 start pnpm --name "pegasus-ui" -- start
```

This will start the application in the background. You can check the status of your application with `pm2 list`.

### 4. (Optional) Set up a Reverse Proxy

For a production environment, it is recommended to use a reverse proxy like Nginx to forward requests to your Next.js application. This is a more advanced setup and is not covered here.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
