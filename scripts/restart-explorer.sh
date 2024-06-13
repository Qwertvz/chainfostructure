echo "Stopping hardhat explorer..."
cd ../blockscout/docker-compose/
docker-compose -f hardhat-network.yml stop && \
docker-compose -f hardhat-network.yml rm &&

echo "Deleting data ..."
sudo rm -rd ../blockscout/docker-compose/services/blockscout-db-data
sudo rm -rd ../blockscout/docker-compose/services/logs
sudo rm -rd ../blockscout/docker-compose/services/redis-data
sudo rm -rd ../blockscout/docker-compose/services/stats-db-data

echo "Creating folders..."
mkdir ../blockscout/docker-compose/services/blockscout-db-data
mkdir ../blockscout/docker-compose/services/logs
mkdir ../blockscout/docker-compose/services/redis-data
mkdir ../blockscout/docker-compose/services/stats-db-data

echo "Running hardhat explorer..."
docker-compose -f hardhat-network.yml up -d --build
