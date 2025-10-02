#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Automatic Installation Script for Pegasus UI on Ubuntu 22.04 ---

echo "--- Starting Pegasus UI Environment Setup ---"

# 1. Update package list and install dependencies
echo "--- Step 1: Updating package list and installing curl & git ---"
sudo apt-get update && sudo apt-get install -y curl git

# 2. Install nvm (Node Version Manager)
echo "--- Step 2: Installing nvm ---"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# 3. Load nvm into the current shell session
echo "--- Step 3: Loading nvm into shell ---"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# 4. Install the latest LTS version of Node.js
echo "--- Step 4: Installing Node.js LTS ---"
nvm install --lts

# 5. Install pnpm
echo "--- Step 5: Installing pnpm ---"
npm install -g pnpm

# 6. Setup pnpm
echo "--- Step 6: Setting up pnpm global bin directory ---"
pnpm setup

echo "--- Environment setup complete! ---"
echo ""
echo "--- IMPORTANT NEXT STEPS ---"
echo "1. Close and reopen your terminal, or run the following command to apply changes:"
echo "   source ~/.bashrc"
echo ""
echo "2. Clone the repository and install dependencies:"
echo "   git clone https://github.com/Daniel-Farmer/Pegasus-UI.git"
echo "   cd Pegasus-UI"
echo "   pnpm install"
echo ""
echo "3. Start the development server:"
echo "   pnpm run dev"
echo "--------------------------------------------------"
