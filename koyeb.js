FROM node:lts-buster
RUN apt-get update && \
apt-get install -y \
ffmpeg \
imagemagick \
webp && \
apt-get upgrade -y && \
rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/testando0/HutaoBot-MD

WORKDIR /root/HutaoBot-MD

COPY ./root/HutaoBot-MD

RUN npm install

CMD ["node", "main.js"]
