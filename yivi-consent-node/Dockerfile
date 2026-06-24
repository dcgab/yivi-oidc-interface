FROM node:20-alpine

ARG VITE_YIVI_BACKEND_URL
ARG VITE_YIVI_FRONTEND_DEBUG
ENV VITE_YIVI_BACKEND_URL=$VITE_YIVI_BACKEND_URL
ENV VITE_YIVI_FRONTEND_DEBUG=$VITE_YIVI_FRONTEND_DEBUG

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN adduser -S ory -D -u 10000 -s /bin/nologin

COPY package.json package.json
COPY package-lock.json package-lock.json
# RUN npm ci --silent
RUN npm install

COPY . /usr/src/app

# USER 10000

RUN npm run build
ENTRYPOINT npm run start

EXPOSE 3000
