#!/bin/sh
[ -z "$NVM_DIR" ] && export NVM_DIR="$HOME/.nvm"

if [[ -s "$HOME/.nvm/nvm.sh" ]]; then
  . "$HOME/.nvm/nvm.sh"
elif [[ -x "$(command -v brew)" && -s "$(brew --prefix nvm)/nvm.sh" ]]; then
  . "$(brew --prefix nvm)/nvm.sh"
fi
 
if [[ "$(command -v nvm)" ]]; then
 nvm install 7.10.0
fi
 
 node ../scripts/download-realm.js ios --sync
