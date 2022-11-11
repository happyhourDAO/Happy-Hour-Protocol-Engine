const { assert } = require("chai")
const { default: Web3 } = require("web3")
const { BN, expectRevert, time } = require("@openzeppelin/test-helpers")

const happyhour = artifacts.require("HappyHourProtocolv3")
const drnk = artifacts.require("DRNKgovernance")

contract("HappyHour", async (accounts) => {
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

    await happyhourContract.onboardPDE("cantina", "shanghai", accounts[2], "69", { from: accounts[2] })
    const PDEowner = await happyhourContract.PDEtoOwner("1")

    await happyhourContract._changeAccessCode("1", "666", { from: accounts[2] })
    const accessCode = await happyhourContract.pdes("1")
    const accessCodeStringed = accessCode["_accessCode"].toString()
    assert.equal("666", accessCodeStringed)
    assert.equal(PDEowner, accounts[2])
  })

  it("Should earn HOUR and mint DRNK", async () => {
    const happyhourContract = await happyhour.deployed()
    const drnkContract = await drnk.deployed()

    await happyhourContract.onboardPDE("cantina", "shanghai", accounts[3], "69", { from: accounts[3] })
    const PDEid = await happyhourContract.pdes("2")
    const PDEidStringed = PDEid["_PDEid"].toString()
    const accessCode = await happyhourContract.pdes("2")
    const accessCodeStringed = accessCode["_accessCode"].toString()

    await happyhourContract.startHOUR(PDEidStringed, accessCodeStringed, { from: accounts[4], value: web3.utils.toWei("0.01", "ether") })
    const numofDrinkers = await happyhourContract.getNumberOfCurrentDrinkers()
    const numofDrinkersStringed = numofDrinkers.toString()
    assert.equal(numofDrinkersStringed, "1")

    // const tellmethetime = await time.latestBlock()
    // const timeStringed = tellmethetime.toString()
    // console.log(timeStringed)

    // await time.advanceBlock()

    await time.increase(time.duration.hours(7))

    await happyhourContract.endHOUR(accounts[4], { from: accounts[4] })

    await happyhourContract.startHOUR(PDEidStringed, accessCodeStringed, { from: accounts[4], value: web3.utils.toWei("0.01", "ether") })
    await time.increase(time.duration.hours(7))
    await happyhourContract.endHOUR(accounts[4], { from: accounts[4] })

    await happyhourContract.startHOUR(PDEidStringed, accessCodeStringed, { from: accounts[4], value: web3.utils.toWei("0.01", "ether") })
    await time.increase(time.duration.hours(7))
    await happyhourContract.endHOUR(accounts[4], { from: accounts[4] })

    await happyhourContract.startHOUR(PDEidStringed, accessCodeStringed, { from: accounts[4], value: web3.utils.toWei("0.01", "ether") })
    await time.increase(time.duration.hours(7))
    await happyhourContract.endHOUR(accounts[4], { from: accounts[4] })

    const howmanyHOURS = await happyhourContract.balanceOf(accounts[4])
    const howmanyHOURSstringed = howmanyHOURS.toString()
    console.log(howmanyHOURSstringed)

    const drnkContractAddress = await drnkContract.address
    await happyhourContract.mintyDRNK(drnkContractAddress, accounts[4], 2000, { from: accounts[4] })
    const DRNKamount = await drnkContract.balanceOf(accounts[4])
    assert.equal(DRNKamount / 10 ** 18, 200, "DRNK minted not equal")
  })

  it("Should earn penalized HOUR", async () => {
    const happyhourContract = await happyhour.deployed()
    const drnkContract = await drnk.deployed()

    await happyhourContract.onboardPDE("cantina", "shanghai", accounts[5], "69", { from: accounts[5] })
    const PDEid = await happyhourContract.pdes("3")
    const PDEidStringed = PDEid["_PDEid"].toString()
    const accessCode = await happyhourContract.pdes("3")
    const accessCodeStringed = accessCode["_accessCode"].toString()

    await happyhourContract.startHOUR(PDEidStringed, accessCodeStringed, { from: accounts[6], value: web3.utils.toWei("0.01", "ether") })
    const numofDrinkers = await happyhourContract.getNumberOfCurrentDrinkers()
    const numofDrinkersStringed = numofDrinkers.toString()
    assert.equal(numofDrinkersStringed, "1")

    await time.increase(time.duration.hours(10))

    await happyhourContract.endHOUR(accounts[6], { from: accounts[6] })

    const howmanyHOURS = await happyhourContract.balanceOf(accounts[6])
    const howmanyHOURSadjusted = howmanyHOURS / 10 ** 18
    console.log(howmanyHOURSadjusted.toString())
  })
})
