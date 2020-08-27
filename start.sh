echo '>> Create oshop-network in docker'
docker network create oshop-network
echo '>> Successfully created oshop-network'

echo '>> Create online-shop-api image'
docker build -t oshop-api ./online-shop-api
echo '>> Run online-shop-api image'
docker run -d --name oshop-api --network oshop-network -p 8080:8080 oshop-api

echo '>> Create online-shop-client image'
docker build -t oshop-client ./online-shop-client
echo '>> Run online-shop-client image'
docker run -d --name oshop-client --network oshop-network -p 80:80 oshop-client