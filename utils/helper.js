const md5 = require('md5');

function lazyImage(post) {
    if(!post.content) {
        return undefined;
    }
    var content = post.content.toString();
    var imgRe = /<img.*?\ssrc\s*=\s*[\'\"]\S+[\'\"]\s.*?>/gim;
    var urlRe = /(http:|https:|\/|\.)\S+(?=["|']\s)/i;
    var imgUrlsArr = content.match(imgRe);
    var data = [];
    imgUrlsArr && imgUrlsArr.forEach(function(item) {
        item.match(urlRe) && data.push(item.match(urlRe)[0]);
    });
    return data;
}
const hashIdOfPost = (post) => post.abbrlink || md5(post.slug);


module.exports = {
    hashIdOfPost,
    lazyImage
}
