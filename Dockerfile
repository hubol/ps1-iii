FROM node:16-alpine
COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json
WORKDIR /src
RUN npm ci
COPY ./ /src
RUN du -sh ./media/above-volcano.mp3
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV MEDIA_PATH ./media
RUN npm run build
CMD npm run start