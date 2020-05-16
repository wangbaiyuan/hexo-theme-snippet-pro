const md5 = require('md5');

function lazyImage(post) {
    var content = post.content.toString();
    var imgRe = /<img.*?\ssrc=[\'\"]\S+[\'\"]\s.*?>/gim;
    var urlRe = /(http:|https:|\/|\.)\S+(?="\s)/i;
    var imgUrlsArr = content.match(imgRe);
    var data = [];
    imgUrlsArr && imgUrlsArr.forEach(function(item) {
        item.match(urlRe) && data.push(item.match(urlRe)[0]);
    });
    return data;
}
const hashIdOfPost = (post) => post.abbrlink || md5(post.slug);

hexo.extend.helper.register('lazyImage', lazyImage);
hexo.extend.helper.register('hashIdOfPost', hashIdOfPost);
