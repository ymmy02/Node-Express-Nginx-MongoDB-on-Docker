#!/bin/sh

cmd="$@"

: ${MONGO_HOST:=mongo}
: ${MONGO_PORT:=27017}

until nc -z $MONGO_HOST $MONGO_PORT
do
    echo "Waiting for Mongo ($MONGO_HOST:$MONGO_PORT) to start..."
    sleep 1
done

exec $cmd
