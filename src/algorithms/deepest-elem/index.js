// proper solution
/*
  <ul>
    <li>Item:
      <ol>
        <li>Point:
          <div>
            <ul>
              <li>elem1</li>
            </ul>
          </div>
        </li>
      </ol>
   </li>
   <li>elem2</li>
  </ul>
  <ul>
   <li>simple list1</li>
  </ul>
  <ul></ul>
*/

const solution = () => {
  let deepest = 0;
  const body = document.getElementsByTagName('body')[0];
  const loop = (level) => (elem) => {
    if (elem.nodeType == 1) {
      let newLevel = level;
      if ('OL UL'.includes(elem.nodeName)) newLevel++;
      if (elem.childNodes.length) elem.childNodes.forEach(loop(newLevel));
      if (deepest < newLevel) deepest = newLevel;
    }
  };

  if (body.childNodes.length) {
    body.childNodes.forEach(loop(0));
  }

  return deepest;
};
console.log(solution()); // 3