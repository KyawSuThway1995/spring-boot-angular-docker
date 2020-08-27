echo '>> Removing online-shop-client buid directory...'
rm -rf online-shop-client/dist
echo '>>Finished'

echo '>> Start building online-shop-client project...'
cd online-shop-client && ng b --prod && cd ../
echo '>> Successfully build'

echo '>> Remove online-shop-client image from docker'
docker container stop oshop-client
docker container rm oshop-client
docker rmi -f oshop-client
echo '>> Successfully removed online-shop-client image'

echo 'Romve online-shop-api image form docker'
docker container stop oshop-api
docker container rm oshop-api
docker rmi -f oshop-api
echo '>> Successfully removed online-shop-api image'

echo '>> Remove oshop-network'
docker network rm oshop-network
echo '>> Finished'

# echo '>> Create online-shop-client image'
# docker build -t oshop-client ./online-shop-client
# echo '>> Run online-shop-client image'
# docker run -d --name oshop-client --network oshop-network -p 80:80 oshop-client
