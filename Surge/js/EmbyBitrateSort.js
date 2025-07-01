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
    // 筛选-剔除1M以下的视频流码率
    let MediaSources = item.MediaSources.filter(e => e.MediaStreams.filter(e => e.Type === 'Video')[0].BitRate > 1024 * 1024);
    if (MediaSources.length > 0) {
        item.MediaSources = MediaSources;
    }

    // 按照文件大小排序
    item.MediaSources = stableSort(item.MediaSources, (a, b) => b.Size - a.Size);
})
body.Items = items;

body = JSON.stringify(body);
$done({body});
