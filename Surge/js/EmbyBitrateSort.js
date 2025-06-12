const url = $request.url;
let body = JSON.parse($response.body);

// console.log('emby-rename');
// console.log('url==>' + url);

let items = body.Items;
items.forEach(item => {
    item.MediaSources = item.MediaSources.sort((a, b) => {
        return a.Bitrate - b.Bitrate;
    })
})
body.Items = items;

body = JSON.stringify(body);
$done({body});
