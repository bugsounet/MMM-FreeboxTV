#!/bin/bash

# Check for required Debian packages
PACKAGE="devilspie2 wmctrl vlc" # omxplayer

if [[ $(dpkg-query -W -f='${Status}\n' $PACKAGE 2>/dev/null | grep -c "ok installed") -lt 5 ]];
then
    echo -e "\e[96mUpdating packages ...\e[90m"
    sudo apt update || echo -e "\e[91mUpdate failed, carrying on installation ...\e[90m";
    echo ""
    echo -e "\e[96mInstalling helper tools: devilspie2 and wmctrl...\e[90m"
    sudo apt install -y $PACKAGE;
else
    echo "$PACKAGE is already installed. Moving on.";
fi
