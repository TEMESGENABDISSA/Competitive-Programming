var join = function(arr1, arr2) {
    const idSet = new Set();
    const resultMap = {};
  
    for (const obj of arr1) {
      const id = obj.id;
      idSet.add(id);
      resultMap[id] = obj;
    }
  
    for (const obj of arr2) {
      const id = obj.id;
      idSet.add(id);
      if (resultMap[id]) {
        Object.assign(resultMap[id], obj);
      } else {
        resultMap[id] = obj;
      }
    }
  
    const joinedArray = Array.from(idSet).map((id) => resultMap[id]);
    joinedArray.sort((a, b) => a.id - b.id);
  
    return joinedArray;
  }
  
  