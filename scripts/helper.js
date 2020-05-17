const {lazyImage, hashIdOfPost} = require('../utils/helper');
const md5 = require('md5');

hexo.extend.helper.register('lazyImage', lazyImage);
hexo.extend.helper.register('hashIdOfPost', hashIdOfPost);
hexo.extend.helper.register('md5', md5);
