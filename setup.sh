#!/bin/sh
# Create project
ng new pentwheel
cd pentwheel

# Create server directory and initialize
mkdir server
cd server
npm init -y

# Install dependencies
npm install express typescript ts-node @types/express @types/node
npm install --save-dev ts-node-dev