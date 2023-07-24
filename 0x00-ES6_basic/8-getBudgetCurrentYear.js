/* no more empty objects */

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const year = (new Date()).getFullYear();
  return {
    [`income-${year}`]: income,
    [`gdp-${year}`]: gdp,
    [`capita-${year}`]: capita,
  };
}
