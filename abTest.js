// Write an AB test function that takes in a experimentId and deviceId and returns a boolean value. The function should return true if the deviceId is in the experiment group for the given experimentId, and false otherwise. The function should be able to handle multiple experiments and devices at the same time, and should not run more than 2 experiments at the same time.
// There are three experiments with the which have to run for 20%, 50% and 30% of the devices respectively.

const experiments = {
  1: 0.2,
  2: 0.5,
  3: 0.3,
};

const checkEligibilityForABTest = (experimentId, deviceId) => {
  const experiment = experiments[experimentId];
  const random = Math.random();
  return random < experiment;
};
