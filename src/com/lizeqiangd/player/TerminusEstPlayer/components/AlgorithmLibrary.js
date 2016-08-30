/**
 * Created by lizeq on 8/26/2016.
 */
"use strict";
/**
 * 算法合集.
 */
class AlgorithmLibrary {
    /**
     * A9的二分法搜索.
     * 中是通过fn(a,arr[i]) 进行比较.注意写法!
     */
    static bsearch(arr, a, fn) {
        if (arr.length == 0) {
            return 0;
        }
        if (fn(a, arr[0]) < 0) {
            return 0;
        }
        if (fn(a, arr[arr.length - 1]) >= 0) {
            return arr.length;
        }
        let low = 0;
        let hig = arr.length - 1;
        let i;
        let count = 0;
        while (low <= hig) {
            i = Math.floor((low + hig + 1) / 2);
            count++;
            if (fn(a, arr[i - 1]) >= 0 && fn(a, arr[i]) < 0) {
                return i;
            }
            else if (fn(a, arr[i - 1]) < 0) {
                hig = i - 1;
            }
            else if (fn(a, arr[i]) >= 0) {
                low = i;
            }
            else {
                throw new Error('bsearch查找错误.');
            }
            if (count > 1000) {
                throw new Error('bsearch查找超时.');
            }
        }
        return -1;
    }
    /**
     * 默认二分法搜索.
     * @param    arr
     * @param    a
     * @return
     */
    static bsearch_default(arr, a) {
        return AlgorithmLibrary.bsearch(arr, a, (a, b) => {
            if (a > b) {
                return 1;
            }
            else if (a == b) {
                return 0;
            }
            else {
                return -1;
            }
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AlgorithmLibrary;
//# sourceMappingURL=AlgorithmLibrary.js.map