#!/bin/bash

sudo su
sudo yum update -y

sudo yum install -y nodejs

npm install -g pm2

cd /web-ifsp/web-ifsp-project-v2

git pull

npm install
npm run build

pm2 start npm --name "web-ifsp" -- run start
pm2 save
pm2 startup systemd
