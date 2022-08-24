FROM node:16-alpine
COPY ./ /
RUN npm ci --no-audit
RUN npm run build
CMD npm run start -- -p $PORT
