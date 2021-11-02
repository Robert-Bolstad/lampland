const dataFilter = (data, id) => {
  const filtered = data.filter((item) => {
    if (item.id == id) {
      return true;
    }
  });

  return filtered;
};

export default dataFilter;
