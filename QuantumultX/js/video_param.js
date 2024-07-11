const url = $request.url;

console.log('====$request====')
console.log($request)
let body = JSON.parse($request.body);
console.log("====body====")
console.log(body)
body.invite_id = 39484189
body.from = 1272

body = JSON.stringify(body);
$done({body});





