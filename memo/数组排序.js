console.log(
    [1, 5, 4].sort(function (a, b) {
        return a - b;   // 如果是负数或者0不调换顺序,如果是正数则调换
    })
);