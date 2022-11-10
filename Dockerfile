FROM node:16.12.0-buster
MAINTAINER lee@cheonghyun.com
ARG ENV

ADD . /
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run start