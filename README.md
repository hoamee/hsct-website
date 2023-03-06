# Deployment guide

## Requirements
1. NodeJs
2. Yarn
## Install libs
```bash
yarn install
yarn install serve
```
## Build production
```bash
yarn build
```
## Run application
```bash
serve -s build -l 80
```
It's ok to change port "80" by any other port.