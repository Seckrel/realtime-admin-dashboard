export const AppropriateTime = (hrs: number) => {
  const years = 87600;
  const weeks = 168;
  const minutes = 60;
  const seconds = 3600;

  console.log(hrs);

  // years
  let value = hrs / years;
  if (value > 1) return `${value.toFixed(2)} years`;

  // weeks
  value = hrs / weeks;
  if (value > 1 && value <= 4) return `${value.toFixed(2)} weeks`;

  // months
  if (value > 4) return `${(value / 4).toFixed(2)} months`;

  value = hrs / minutes;
  if (value > 1 && value < 60) return `${value.toFixed(2)} min`;

  value = hrs / seconds;
  if (value > 1 && value < 60) return `${value.toFixed(2)} sec`;

  return `${hrs.toFixed(2)} hrs`;
};

export const HrsToPercentage = (hrs:number) => {
    return (hrs/24) * 100;
}
