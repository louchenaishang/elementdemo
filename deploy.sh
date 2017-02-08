#! /bin/bash
npm run build
zip -r dist.zip dist/
scp ./dist.zip louchen@45.32.90.134:/home/louchen/
ssh root@45.32.90.134 /home/louchen/deploy.sh
rm -rf ./dist.zip
rm -rf ./dist/

