RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs-legacy npm git libboost1.55-all libssl-dev \
  && rm -rf /var/lib/apt/lists/* && \
  chmod +x /wait-for-it.sh

ADD . /pool/
WORKDIR /pool/

RUN npm update

RUN mkdir -p /config

EXPOSE 8117
EXPOSE 3333
EXPOSE 4444
EXPOSE 5555
EXPOSE 7777
EXPOSE 9099
EXPOSE 6379

VOLUME ["/config"]

CMD node init.js -config=/config/config.json
