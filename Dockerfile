FROM rcauquil/node-12-npm-7
COPY ./ /
RUN npm ci --no-audit
CMD npm run start
