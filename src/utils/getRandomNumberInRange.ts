const getRandomNumberInRange = (min = 0, max = 10) => {
  // Could be 10.xxx when max = 10
  const randomNumberInRange = Math.random() * (max - min + 1) + min

  return randomNumberInRange > max
    ? randomNumberInRange - 1
    : randomNumberInRange
}

export default getRandomNumberInRange
