#!/bin/bash
sudo su
sudo yum update -y
sudo amazon-linux-extras enable nginx1
sudo yum install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

sudo yum install -y nodejs
npm install -g pm2

cd /web-ifsp
cd /web-ifsp-project-v2

git pull

npm install
npm run build

pm2 start npm --name "web-ifsp" -- run start
pm2 startup
pm2 save
