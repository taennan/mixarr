/**
 * @file
 * @author Me
 * @version 0.0.0
 *
 * @fileoverview Bunch of stuff
 *
 */

/**
 * Equivalent of Pythons' range() function.
 * dwe rde fe inm
 * @type {Function}
 * @param {Number} length blah
 * @param {Number?} start feinfin
 * @param {Number?} step  dwip wlnd onw console.warn().
 *                         dewoifhoei.
 *                        deifoe
 * @returns {Number[]}
 */
export
function range(length, start=0, step=1) {
    let arr = [];
    for (let i = start; i < length; i += step) {
        arr.push(i);
    }
    return arr;
}
