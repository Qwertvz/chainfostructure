## Installation process on your local server

To install and run this repository, you need to clone and install submodules using the following commands

``` bash
git clone https://github.com/Qwertvz/chainfostructure.git
git submodule init
```

or

``` bash
git clone --recurse-submodules https://github.com/Qwertvz/chainfostructure.git
```

Running node
``` bash
docker-compose up -f hardhat-node.yaml up -d --build
```

Running explorer
``` bash
docker-compose up -f hardhat-network.yaml up -d --build
```
