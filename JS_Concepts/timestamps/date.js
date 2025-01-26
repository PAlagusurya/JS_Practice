//1672531200000 is the number of milliseconds since the Unix epoch.

// The new Date() converts it to a readable date object in your system's time zone.
console.log(new Date(1672531200000));

//To calculate the timedifference

const firstDate = new Date();
const secondDate = new Date(2025, 0, 28);

const timedifference = secondDate.getTime() - firstDate.getTime();
console.log(timedifference / (1000 * 60 * 60 * 24));

//To set expiry for token of one day
const now = Date.now();
const futureDate = new Date(now + 1000 * 60 * 60 * 24);
console.log(futureDate);
console.log(new Date());
