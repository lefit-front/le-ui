export const data = (() => {
  let result = [];
  for (let index = 0; index < 100; index++) {
    result.push({
      value: index,
      label: `testData${index}`
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
      label: `<div style="color: ${
        index % 2 === 0 ? '#ff6040' : '#33cc7f'
      }">name${index}</div>`
    });
  }
  return result;
})();

export const data3 = (() => {
  let result = [];
  for (let index = 0; index < 30; index++) {
    let children = [];
    for (let j = 0; j < 20; j++) {
      let children1 = [];
      for (let k = 0; k < 10; k++) {
        children1.push({
          value: `${index}-${j}-${k}`,
          label: `${index}-${j}-${k}`
        });
      }
      children.push({
        value: `${index}-${j}`,
        label: `${index}-${j}`,
        children: children1
      });
    }
    result.push({
      value: index,
      label: `<div style="color: ${
        index % 2 === 0 ? '#ff6040' : '#33cc7f'
      }">name${index}</div>`,
      children: children
    });
  }
  return result;
})();
