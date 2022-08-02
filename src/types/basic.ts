/**
 * @see https://zhuanlan.zhihu.com/p/432942317
 * @see https://blog.csdn.net/Jioho_chen/article/details/125611340
 */

// - any: skip type check
// - unknown: any type derives from unknown
// - never: throw error

type primitiveString = string;
type primitiveNumber = number;
type primitiveBoolean = boolean;

type typeArray = Array<number>;
type typeArray2 = number[];

type typeAny = any;
