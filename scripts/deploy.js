// if we imported from ethers, ethers doesn't know that we already compiled a SimpleStorage contract
// but hardhat does
const { ethers } = require("hardhat")

main = async () => {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying contract..")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(`Deployed contract to ${simpleStorage.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
