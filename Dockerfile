
# use a node base image
FROM node:12-onbuild
EXPOSE 3000 (port)
WORKDIR /root
ADD package.json .
ADD app.js .
ADD index.html .
RUN npm install
CMD ["npm", "start"]

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1

