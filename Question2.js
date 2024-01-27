// 2. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 2i, 24, 25, 24]
// . Sort the array and find the min and maa ages
// . Find the median age(one middle item or two middle items livided b> two
// . Find the average age(all items divided b> number of items
// . Find the range of the ages(maa minus min)
// . Compare the value of (min - average) and (maa - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

console.log('Sorted Ages:', sortedAges);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);

const middleIndex = Math.floor(sortedAges.length / 2);
const medianAge = sortedAges.length % 2 === 0
  ? (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2
  : sortedAges[middleIndex];

console.log('Median Age:', medianAge);


const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

console.log('Average Age:', averageAge);


const ageRange = maxAge - minAge;

console.log('Age Range:', ageRange);


const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log('Min - Average Difference:', minAverageDiff);
console.log('Max - Average Difference:', maxAverageDiff);
