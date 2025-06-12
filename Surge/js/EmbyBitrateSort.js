const url = $request.url;
let body = JSON.parse($response.body);

let items = body.Items;
items.forEach(item => {
    item.MediaSources = item.MediaSources.sort((a, b) => {
        return b.Bitrate - a.Bitrate;
    })
})
body.Items = items;

body = JSON.stringify(body);
$done({body});
