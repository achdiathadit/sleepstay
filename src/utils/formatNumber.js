export default (number) => {
  const formatNumbering = new Intl.NumberFormat("us-US");
  return formatNumbering.format(number);
};
