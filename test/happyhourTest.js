const { assert } = require("chai")
const { default: Web3 } = require("web3")
const { BN, expectRevert, time } = require("@openzeppelin/test-helpers")

const happyhour = artifacts.require("HappyHourProtocolv2")
const drnk = artifacts.require("DRNKgovernance")

contract("HappyHour", async accounts => {
  it("Should deploy contracts", async () => {
    const happyhourContract = await happyhour.deployed()
    const drnkContract = await drnk.deployed()

    const happyhourInitialSupply = await happyhourContract.totalSupply()
    const drnkInitialSupply = await drnkContract.totalSupply()
    assert(happyhourInitialSupply.toString() == drnkInitialSupply.toString())

    const happyhourOwner = await happyhourContract.owner()
    const drnkOwner = await drnkContract.owner()
    assert.equal(happyhourOwner, drnkOwner)
  })

  it("Should onboard new PDE", async () => {
    const happyhourContract = await happyhour.deployed()
    const drnkContract = await drnk.deployed()

    await happyhourContract.onboardPDE("cantina", "shanghai", accounts[1], "69", { from: accounts[1] })
    const PDEowner = await happyhourContract.PDEtoOwner("0")
    assert.equal(PDEowner, accounts[1])
  })

  it("Should allow PDE to change access code", async () => {
    const happyhourContract = await happyhour.deployed()
    const drnkContract = await drnk.deployed()

    await happyhourContract.onboardPDE("cantina", "shanghai", accounts[1], "69", { from: accounts[1] })
    const PDEowner = await happyhourContract.PDEtoOwner("0")

    await happyhourContract._changeAccessCode("1", "666", { from: accounts[1] })
    assert.equal(PDEowner, accounts[1])
  })

  it("Should earn HOUR and mint DRNK", async () => {
    const happyhourContract = await happyhour.deployed()
    const drnkContract = await drnk.deployed()

    await happyhourContract.onboardPDE("cantina", "shanghai", accounts[1], "69", { from: accounts[1] })
    const PDEid = await happyhourContract.pdes("2")
    const PDEidStringed = PDEid["_PDEid"].toString()
    const accessCode = await happyhourContract.pdes("2")
    const accessCodeStringed = accessCode["_accessCode"].toString()

    await happyhourContract.startHOUR(PDEidStringed, accessCodeStringed, { from: accounts[2], value: web3.utils.toWei("0.01", "ether") })
    const numofDrinkers = await happyhourContract.getNumberOfCurrentDrinkers()
    const numofDrinkersStringed = numofDrinkers.toString()
    assert.equal(numofDrinkersStringed, "1")

    // const tellmethetime = await time.latestBlock()
    // const timeStringed = tellmethetime.toString()
    // console.log(timeStringed)

    // await time.advanceBlock()

    await time.increase(time.duration.minutes(20))

    await happyhourContract.endHOUR(accounts[2], { from: accounts[2] })
    const howmanyHOURS = await happyhourContract.balanceOf(accounts[2])
    const howmanyHOURSstringed = howmanyHOURS.toString()
    console.log(howmanyHOURSstringed)

    const drnkContractAddress = await drnkContract.address
    await happyhourContract.mintyDRNK(drnkContractAddress, accounts[2], 2000, { from: accounts[2] })
    const DRNKamount = await drnkContract.balanceOf(accounts[2])
    console.log(DRNKamount)
    assert.equal(DRNKamount, 200, "DRNK minted not equal")
  })
})
