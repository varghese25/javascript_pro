const ids = [1, 2, 3];

async function fetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(id * 10), 1000);
  });
}
async function processAll() {
  const results = [];
  ids.forEach(async (id) => {
    const data = await fetchData(id);
    results.push(data);
  });
  console.log(results);
}
processAll();
