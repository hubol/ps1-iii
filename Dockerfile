FROM node:16-alpine
COPY ./ /
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm ci
ENV NODE_ENV production
RUN npm run build
#CMD npm run start -- -p $PORT
RUN npm install http-server -g
EXPOSE $PORT
CMD http-server