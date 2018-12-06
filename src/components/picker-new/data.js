export const data = (() => {
  let result = []
  for (let index = 0; index < 100; index++) {
    result.push({
      value: index,
      label: `testData${index}`
    })
  }
  return result;
})()