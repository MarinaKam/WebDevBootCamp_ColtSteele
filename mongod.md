````
sudo apt-get install -y mongodb-org
mkdir data
npm install mongoose --save
echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
chmod a+x mongod
./mongod

mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"

````


````
use ......(name-db)
switched to db ....name-db
show collections
db.name-db.find()
````