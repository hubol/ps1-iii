FROM rcauquil/node-12-npm-7
COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json
RUN npm ci --no-audit
CMD npm run start
