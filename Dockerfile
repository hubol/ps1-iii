FROM mhart/alpine-node:12.22
COPY ./ /
RUN npm ci --no-audit
RUN npm run build
CMD npm run start -- -p $PORT
