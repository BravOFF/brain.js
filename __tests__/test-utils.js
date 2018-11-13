export function onePlusPlus3D(width, height, depth) {
  const grid = [];
  let i = 1;
  for (let z = 0; z < depth; z++) {
    const rows = [];
    for (let y = 0; y < height; y++) {
      const columns = [];
      for (let x = 0; x < width; x++) {
        columns.push(i++);
      }
      rows.push(columns);
    }
    grid.push(rows);
  }
  return grid;
}

export function onePlusPlus2D(width, height) {
  const rows = [];
  let i = 1;
  for (let y = 0; y < height; y++) {
    const columns = [];
    for (let x = 0; x < width; x++) {
      columns.push(i++);
    }
    rows.push(columns);
  }
  return rows;
}

export function zero3D(width, height, depth) {
  const grid = [];
  for (let z = 0; z < depth; z++) {
    const rows = [];
    for (let y = 0; y < height; y++) {
      const columns = [];
      for (let x = 0; x < width; x++) {
        columns.push(0);
      }
      rows.push(columns);
    }
    grid.push(rows);
  }
  return grid;
}

export function zero2D(width, height) {
  const rows = [];
  for (let y = 0; y < height; y++) {
    const columns = [];
    for (let x = 0; x < width; x++) {
      columns.push(0);
    }
    rows.push(columns);
  }
  return rows;
}
