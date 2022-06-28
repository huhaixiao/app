function bound(
  position: number,
  min: number | undefined,
  max: number | undefined
) {
  let ret = position;
  if (min !== undefined) {
    ret = Math.max(position, min);
  }
  if (max !== undefined) {
    ret = Math.min(ret, max);
  }
  return ret;
}

function rubberband(distance: number, dimension: number, elasticity: number) {
  return (
    (distance * dimension * elasticity) / (dimension + elasticity * distance)
  );
}

export function rubberbandIfOutOfBounds(
  position: number,
  min: number,
  max: number,
  elasticity = 0.15
) {
  if (elasticity === 0) return bound(position, min, max);
  if (position < min)
    return min - rubberband(min - position, max - min, elasticity);
  if (position > max)
    return max + rubberband(position - max, max - min, elasticity);
  return position;
}
