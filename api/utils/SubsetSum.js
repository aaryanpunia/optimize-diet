/**
 * Recursive approach
 * Time complexity - O(2^n)
 * Space complexity - O(n), take into account additional stack memory and memory for subsets
 */

let result = null

function subset(arr, target, range, combo) {
    result = subset_sum(arr, target, [], range, combo);
    return result;
}

function subset_sum(numbers, target, partial, range, combo) {
    let s, n, remaining

    partial = partial || []
    s = partial.reduce((a, b) => a + b, 0)

    if (s > target || partial.length > combo) return null

    // check if the partial sum is equals to target
    if (s <= target + range && s >= target - range && partial.length == combo) {
        if (!result) result = []
        result.push(partial)
        // console.log("%s=%s", partial.join("+"), target)
    }

    for (let i = 0; i < numbers.length; i++) {
        n = numbers[i]
        remaining = numbers.slice(i + 1)
        subset_sum(remaining, target, partial.concat([n]), range, combo)
    }

    return result
}

module.exports = subset;