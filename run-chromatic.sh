#!/bin/bash
export $(cat .env | xargs)
yarn dlx chromatic --project-token=$CHROMATIC_TOKEN --exit-zero-on-changes
