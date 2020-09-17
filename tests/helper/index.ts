interface RandomNum {
  (max?: number, min?: number): number;
}

interface CreateRandNumArr {
  (
    len?: number,
    max?: number,
    min?: number,
    creatRandomNum?: RandomNum,
  ): number[]
}

interface CreateRandNumArrSorted {
  (
    inc?: boolean,
    len?: number,
    max?: number,
    min?: number,
    creatRandomNum?: RandomNum,
  ): number[]
}

/**
 * 创建一个随机数
 * @param max 最大值
 * @param min 最小值
 */
export const randomNum: RandomNum = (max = 1001, min = 0) => Math.floor(Math.random() * (max - min) + min);

/**
 * 创建一个随机数组   min <= num < max
 * @param len 长度
 * @param max 最大值
 * @param min 最小值
 * @returns 随机数组
 */
export const createRandNumArr: CreateRandNumArr = (
  len = 30,
  max = 1001,
  min = 0,
  creatRandomNum = randomNum
): number[] => {
  const res: number[] = [];

  for(let i = 0; i < len; i++) {
    res[i] = creatRandomNum(max, min);
  }

  return res;
}

/**
 * 创建一个有序的随机数
 * @param inc 是否是递增的
 * @param len 长度
 * @param max 最大值
 * @param min 最小值
 * @param creatRandomNum 创建随机数
 */
export const createRandNumArrSorted: CreateRandNumArrSorted = (
  inc = true,
  len = 30,
  max = 1001,
  min = 0,
  creatRandomNum = randomNum,
): number[] => {
  const interval = Math.floor((max - min) / len);

  if (interval <= 1) {
    throw Error('数据不好创建呀，请减小 len 或 增大 max 或减小 min');
  }

  const res: number[] = [];
  let next = inc ? min : max;

  let createItem;

  if (inc) {
    createItem = (curMin: number) => {
      const _num = creatRandomNum(curMin + interval, curMin);
      return [_num, _num + 1];
    }
  } else {
    createItem = (curMax: number) => {
      const _num = creatRandomNum(curMax, curMax - interval);
      return [_num, _num - 1]
    }
  }

  for(let i = 0; i < len; i++) {
    const [_num, _next] = createItem(next);
    next = _next;
    res[i] = _num;
  }

  return res;
}
