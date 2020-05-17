var pagination = require('hexo-pagination');

hexo.extend.generator.register('moment', function (locals) {
    return pagination('moment', locals.data.news, {
        perPage: 10,
        layout: ['_partial/news'],
        data: {}
    });
});
