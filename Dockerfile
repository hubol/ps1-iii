FROM node:16-alpine
COPY ./ /
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm ci
RUN npm run build
ENV NODE_ENV production
CMD npm run start -- -p $PORT
