# Create data directories
mkdir data-0{1,2,3}

# Create key file
mkdir ./keys
openssl rand -base64 756 > ./keys/mongo-key.pem
#chmod 600 ./keys/mongo-key.pem

# Run docker compose
docker-compose up