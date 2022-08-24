FROM node:14-alpine
COPY ./ /
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm install
RUN npm run build
CMD npm run start -- -p $PORT
