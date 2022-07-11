const DRNKcontract = artifacts.require("DRNKgovernance")
const HOURv2contract = artifacts.require("HappyHourProtocolv2")

module.exports = function (deployer) {
  deployer.deploy(DRNKcontract)
  deployer.deploy(HOURv2contract)
}
