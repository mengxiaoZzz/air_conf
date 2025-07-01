const url = $request.url;
let body = JSON.parse($response.body);

// 稳定排序
function stableSort(arr, compareFn) {
    // 给每个元素附加原始索引
    const indexedArr = arr.map((value, index) => ({value, index}));

    // 排序时，如果比较结果相等，则按原始索引排序
    indexedArr.sort((a, b) => compareFn(a.value, b.value) || a.index - b.index);

    // 返回排序后的值（去掉索引）
    return indexedArr.map((item) => item.value);
}

let items = body.Items;
items.forEach(item => {
    // 筛选-剔除过低码率
    let MediaSources = item.MediaSources.filter(e => e.Bitrate >= 1024 * 1024);
    if (MediaSources.length > 0) {
        item.MediaSources = MediaSources;
    }

    // 排序
    item.MediaSources = stableSort(item.MediaSources, (a, b) => b.Bitrate - a.Bitrate);
    // item.MediaSources = item.MediaSources.sort((a, b) => {
    //     return b.Bitrate - a.Bitrate;
    // })
})
body.Items = items;

body = JSON.stringify(body);
$done({body});
