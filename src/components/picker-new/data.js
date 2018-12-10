export const data = (() => {
  let result = [];
  for (let index = 0; index < 100; index++) {
    result.push({
      value: index,
      name: `testData${index}`
    });
  }
  return result;
})();

export const data1 = (() => {
  let result = [];
  for (let index = 0; index < 100; index++) {
    result.push(`string${index}`);
  }
  return result;
})();

export const data2 = (() => {
  let result = [];
  for (let index = 0; index < 100; index++) {
    result.push({
      value: index,
      name: `<div style="color: ${index % 2 === 0 ? '#ff6040' : '#33cc7f'}">name${index}</div>`
    });
  }
  return result;
})();
