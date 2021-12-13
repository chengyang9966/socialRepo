module.exports = (rows) => {
  return rows.map((w) => {
    const replaced = {};

    for (let key in w) {
      let camelCase = key.replace(/([-_][a-z])/gi, ($1) =>
        $1.toUpperCase().replace("_", "")
      );
      camelCase = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);

      replaced[camelCase] = w[key];
    }
    return replaced;
  });
};
