interface ICell {
  top: number;
  left: number;
}

type ICellHelper = ICell & {
  height: number;
};

export function getMasonryLayout(
  data: { height: number }[],
  option: { count: number; gap: number; cellWidth: number }
): ICellHelper[] {
  const result: ICellHelper[] = [];
  const help: ICellHelper[] = Array.from(
    { length: option.count },
    (v, index) => ({
      top: -option.gap,
      left: index * (option.cellWidth + option.gap),
      height: 0
    })
  );

  data.forEach(item => {
    const nextHelperCell: ICellHelper = {
      top: Infinity,
      left: 0,
      height: item.height
    };

    for (let i = 0; i < help.length; i += 1) {
      const currentHelp = help[i];
      const nextTop = currentHelp.top + currentHelp.height + option.gap;

      if (nextTop < nextHelperCell.top) {
        nextHelperCell.top = nextTop;
        nextHelperCell.left = currentHelp.left;
      }
    }

    result.push(nextHelperCell);

    for (let i = 0; i < help.length; i += 1) {
      if (help[i].left === nextHelperCell.left) {
        help[i].top = nextHelperCell.top;
        help[i].height = nextHelperCell.height;
      }
    }
  });

  return result;
}
