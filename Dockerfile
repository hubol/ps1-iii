FROM mhart/alpine-node:12.22
COPY ./ /
RUN npm ci --no-audit
CMD npm run start
