#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "--- Starting Pegasus UI Deployment on Ubuntu 22.04 ---"

# 1. Update packages and install dependencies
echo "--- Updating packages and installing curl & git... ---"
sudo apt update && sudo apt install curl git -y

# 2. Install NVM (Node Version Manager)
echo "--- Installing NVM... ---"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# 3. Source NVM script to make it available in this session
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# 4. Install the latest LTS version of Node.js
echo "--- Installing Node.js LTS... ---"
nvm install --lts

# 5. Install pnpm
echo "--- Installing pnpm... ---"
npm install -g pnpm

# 6. Clone the repository
echo "--- Cloning Pegasus UI repository... ---"
git clone https://github.com/Daniel-Farmer/Pegasus-UI.git
cd Pegasus-UI

# 7. Install project dependencies
# We run `pnpm install --no-postinstall` to prevent the dev server from starting
echo "--- Installing project dependencies... ---"
pnpm install --no-postinstall

# 8. Build the application for production
echo "--- Building the application... ---"
pnpm build

# 9. Set up pnpm to handle global packages
echo "--- Setting up pnpm for global packages... ---"
pnpm setup

# 10. Source shell config to update PATH for pnpm
export PNPM_HOME="$HOME/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac

# 11. Install pm2 globally
echo "--- Installing pm2... ---"
pnpm install -g pm2

# 12. Start the application with pm2
echo "--- Starting application with pm2... ---"
pm2 start pnpm --name "pegasus-ui" -- start

echo "--- Deployment successful! ---"
echo "You can check the status of your application with 'pm2 list'."
