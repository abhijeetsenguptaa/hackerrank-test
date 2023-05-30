function maxMin(k, arr) {
    arr.sort((a, b) => a - b);
    let minDifference = Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        const difference = arr[i + k - 1] - arr[i];
        if (difference < minDifference) {
            minDifference = difference;
        }
    }

    return minDifference;
}