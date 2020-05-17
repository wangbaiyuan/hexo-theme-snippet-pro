var pagination = require('hexo-pagination');

hexo.extend.generator.register('moment', function (locals) {
    return pagination('moment', locals.data.news, {
        perPage: 10,
        layout: ['_customizedLayout/news'],
        data: {
            title: "业界动态",
            description: "与时俱进，追踪最新技术动态",
        }
    });
});
