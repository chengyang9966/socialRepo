module.exports = (rows, col) => {
  return rows.map((w) => {
    let newdate = w[col].toLocaleDateString().replace('/g', '-');

    return {
      ...w,
      [col]: newdate
    };
  });
};
