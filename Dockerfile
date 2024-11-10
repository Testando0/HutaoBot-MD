FROM node:lts-buster

RUN apt-get update && \
apt-get install -y \
ffmpeg \
imagemagick \
webp && \
apt-get upgrade -y && \
rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN chmod +x ./start.sh

COPY . .

EXPOSE 5000

CMD ["sh", "-c", "./start.sh & ./main.sh"]