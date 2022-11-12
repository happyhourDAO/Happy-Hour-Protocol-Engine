const DRNKgovernance = artifacts.require("DRNKgovernance")
const HappyHourProtocolv3 = artifacts.require("HappyHourProtocolv3")

module.exports = function (deployer) {
  deployer.deploy(DRNKgovernance)
  deployer.deploy(HappyHourProtocolv3)
}
