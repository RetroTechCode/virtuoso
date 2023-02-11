module.exports = {
  format_date: (date) => {
    // We need to add one to the month since it is returned as a zero-based value
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()}`;
  },
};
