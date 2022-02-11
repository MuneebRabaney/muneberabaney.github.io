#!/bin/bash

function loading() 
{
  FLAG="flag"
  BAR="\\U258%X "
  src_size=$(stat -c%s "$src");
  while true; do
    tgt_size=$(stat -c%s "$tgt");
    i=$( ( $tgt_size * 20 ) / $src_size );
    echo -ne "\r${BAR:0:$i}";
    if [[ $tgt_size == $src_size ]]; then
        echo $1;
        break;
    fi
    sleep .1;
    echo $2;
  done
}

function run_in_development () {
  if [ $1 -eq "Node Modules flagged with legacy peer dependencies installed successfully!" ]; then
    read -p "Start Gatsby now in Development";
    if [ $3 -eq "y" ]; then
      gatsby develop -S -H portfolio.io
      return;
    fi
    return;
  fi
  echo "\r$2\n";
  sleep 1;
}

rm -rf ./node_modules; 
loading "Removing Node Modules folder..." "Node Modules folder removed!";

rm -rf ./package-lock.json;
loading "Removing package lock file..." "Package lock file removed!";

rm -rf ./.cache;  
loading "Removing Gatsby cache folder..." "Gatsby cache folder removed!";

rm -rf ./public; 
loading "Removing Gatsby public folder..." "Gatsby public folder removed!";

npm install --legacy-peer-deps;
loading "Installing Node Modules flagged with legacy peer dependencies..." "Node Modules flagged with legacy peer dependencies installed successfully!";
