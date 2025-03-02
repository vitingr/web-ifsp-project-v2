FROM node:22.13.0 AS builder

RUN apt-get update && apt-get install -y --no-install-recommends \
    wget curl gnupg ca-certificates \
  && mkdir -p /etc/apt/keyrings \
  && curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /etc/apt/keyrings/google-chrome.gpg \
  && echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google.list \
  && apt-get update \
  && apt-get install -y --no-install-recommends \
    google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
  && rm -rf /var/lib/apt/lists/*

ENV PORT=8000
ENV NODE_OPTIONS="--max_old_space_size=4096"

WORKDIR /app

COPY . .

CMD ["yarn", "start"]
