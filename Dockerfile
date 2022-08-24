FROM node:16-alpine
COPY ./ /
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm ci --no-audit
RUN npm run build
CMD npm run start -- -p $PORT
