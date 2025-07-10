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

let MediaSources = body.MediaSources;

// 筛选无媒体信息的视频
let MediaSources_NoMedia = MediaSources.filter(e => e.MediaStreams == null || e.MediaStreams.filter(e => e.Type === 'Video').length === 0);

// 筛选有媒体信息的视频
let MediaSources_Media = MediaSources.filter(e => e.MediaStreams != null && e.MediaStreams.filter(e => e.Type === 'Video').length > 0);

// 筛选-剔除1M以下的码率
let MediaSources_Media_Temp = MediaSources_Media.filter(e => e.MediaStreams.filter(e => e.Type === 'Video')[0].BitRate > 1024 * 1024);
if (MediaSources_Media_Temp.length > 0) {
    MediaSources_Media = MediaSources_Media_Temp;
}

// 排序
MediaSources_Media = stableSort(MediaSources_Media, (a, b) => b.MediaStreams.filter(e => e.Type === 'Video')[0].BitRate - a.MediaStreams.filter(e => e.Type === 'Video')[0].BitRate);

// 把无媒体信息的视频追加到最后
MediaSources = MediaSources_Media.concat(MediaSources_NoMedia);

body.MediaSources = MediaSources

body = JSON.stringify(body);
$done({body});
