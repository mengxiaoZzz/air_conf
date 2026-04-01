const url = $request.url;

// 播放地址
const videoUrl = $request.url;

console.log('videoUrl===' + videoUrl);

// 1. 构建 SenPlayer 的 URL Scheme
const senPlayerLink = `SenPlayer://x-callback-url/play?url=${encodeURIComponent(videoUrl)}`;
// 2. 构建 Surge 的 open-url 协议
const surgeLink = `surge://open-url?url=${encodeURIComponent(senPlayerLink)}`;
// 3. 发送通知，并在通知中携带跳转指令
$notification.post("视频转接", "正在使用nPlayer播放", "");
$task.fetch({
    url: surgeLink
});


$done({});
