const { checkAvailability } = require('./library.js');

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Array of items to check availability for
const itemsToCheck = ['sunglasses', 'bags', 'pants'];

// Array to store promises for each item check
const promises = [];

// Create promises for each item check
itemsToCheck.forEach(item => {
  promises.push(checkAvailability(item, 'distributor'));
});

// Check availability for all items simultaneously
Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);

