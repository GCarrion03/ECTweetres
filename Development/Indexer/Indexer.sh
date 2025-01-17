#!/bin/bash

INDEX_CONFIG_PATH="ConfigIndex/twitter_index_config.json"
RIVER_PATH="ConfigIndex/twitter_river_config.json"
INDEX_NAME="ecuador-index"
INDEX_TYPE="tweet"

#####################CREATE INDEX AND RIVER###########################
 # Create Index
 echo "Creating Index: $INDEX_NAME ..."
 curl -XPOST "localhost:9200/$INDEX_NAME" -d "@$INDEX_CONFIG_PATH"

 sleep 10
 echo

 #Create River-CouchDB
 echo "Creating River-CouchDB..."
 curl -XPUT "localhost:9200/_river/$INDEX_NAME/_meta" -d "@$RIVER_PATH"
 echo

#####################DELETE INDEX AND RIVER###########################
 #Delete River:
#echo "Deleting River"
#curl -XDELETE "http://localhost:9200/_river/$INDEX_NAME/"
#sleep 5
#echo
# #Delete Index:
#echo "Deleting Index: $INDEX_NAME ..."
#curl -XDELETE "http://localhost:9200/$INDEX_NAME/$INDEX_TYPE"
#curl -XDELETE "http://localhost:9200/$INDEX_NAME"
#echo
