#!/bin/sh
# Server side of .github/workflows/deploy-dev.yml. Installed on the VPS as ~/fatturafacile-dev/website-deploy.sh
# and set as the forced command of the CI SSH key in ~/.ssh/authorized_keys:
#   command="~/fatturafacile-dev/website-deploy.sh",restrict ssh-ed25519 AAAA... fatturafacile-website-ci
# Reads the Astro build (tar.gz of dist/) from stdin. The site folder is bind-mounted into ffdev_web, so its contents
# are replaced in place (the folder itself must stay).
set -eu
cd ~/fatturafacile-dev

rm -rf website.new
mkdir -p website.new website
tar xzf - -C website.new
[ -f website.new/index.html ] || { echo "index.html missing in the upload"; rm -rf website.new; exit 1; }
find website -mindepth 1 -delete
cp -a website.new/. website/
chmod -R a+rX website  # nginx in ffdev_web runs as another user
rm -rf website.new
echo "website deploy OK"
