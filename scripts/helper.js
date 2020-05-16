const {lazyImage, hashIdOfPost} = require('../utils/helper');

hexo.extend.helper.register('lazyImage', lazyImage);
hexo.extend.helper.register('hashIdOfPost', hashIdOfPost);
