#!/bin/bash
# A script which starts the retweet process
# Authors: Gustavo Carrion
if [ $# -lt 2 ]
  then
    nohup python retweetbot.py & nohup python retweetbot6h.py & nohup python retweetbot1d.py
fi

eval "./check_process.sh &"
