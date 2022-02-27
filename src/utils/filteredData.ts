import { IItemRate } from '../store/redusers/getExchangeRate/types';

export const filteredData = function (
  data: IItemRate[],
  amountElem: number,
  param: string
) {
  const arr = data.filter((i) => i.symbol.includes(param));
  return arr.slice(0, amountElem);
};
