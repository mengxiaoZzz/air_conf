const url = $request.url;
let body = JSON.parse($response.body);

let items = body.Items;
items.forEach(item => {
    // 筛选-剔除过低码率
    let MediaSources = item.MediaSources.filter(e => e.Bitrate >= 1024);
    if (MediaSources.length > 0) {
        item.MediaSources = MediaSources;
    }

    // 排序
    item.MediaSources = item.MediaSources.sort((a, b) => {
        return b.Bitrate - a.Bitrate;
    })
})
body.Items = items;

body = JSON.stringify(body);
$done({body});
