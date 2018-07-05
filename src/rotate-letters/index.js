const input = ['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris'];

const solution = (array) => {
  const result = [];
  const rotateCity = [];
  const compareString = array.toString();
  let idx = 0;
  array.forEach((city) => {
    let newCity = city.toLowerCase();
    const charLen = city.length;

    if (rotateCity.includes(city)) {
      return;
    } else {
      result[idx] = [];
      result[idx].push(city);
    }

    for (var i = 0; i < charLen - 1; i++) {
      newCity = newCity.toLowerCase();
      const last = newCity.substring(charLen - 1, charLen);
      newCity = last.toUpperCase() + newCity.substring(0, charLen - 1);

      if (compareString.includes(newCity)) {
        rotateCity.push(newCity);
        result[idx].push(newCity);
      }
    }

    idx++;
  });

  return result;
}

solution(input);
/**
 * Output
 * [["Tokyo","Kyoto"],["London","Donlon"],["Rome"],["Paris"]]
 */
