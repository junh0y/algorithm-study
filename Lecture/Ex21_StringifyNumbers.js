let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

let test = [];

function stringifyNumbers(data) {
  let A = [];
  if (typeof data === 'object') {
    console.log(Object.keys(data));
    const keys = Object.keys(data);
    for (let i = 0 ; i < keys.length ; i++) {
      const type = typeof keys[0];
      if (type === 'object') {
        stringifyNumbers(keys[i]);
      } else if (type === 'number') {
        A.push(keys[i]);
      }
    }
  }

  return A;
}

console.log(stringifyNumbers(obj));