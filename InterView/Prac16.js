const demo = (a) => {
  delete [a];
  return a;
};
console.log(demo(6));



    // //demo = (obj, key) => {
    //   delete obj[key];
    //   return obj;
    // }