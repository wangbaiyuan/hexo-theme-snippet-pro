const { hashIdOfPost } = require('../utils/helper');

function getWPComments(siteData, post) {
    const all = siteData['wp-comments']
    if(!all) {
        return []
    }
    if (!post) {
        return all.slice(0, 10);
    }
    return all.filter(c => (post.id && c.comment_post_ID === post.id.toString()));
}

function getGithubComments(siteData, post) {
    const all = siteData['github-comments'];

    if(!all) {
        return []
    }
    if (!post) {
        return all.slice(0, 10);
    }
    return all.filter(c => (c.comment_post_hashID === hashIdOfPost(post).toString()));
}

hexo.extend.helper.register('getWPComments', getWPComments);
hexo.extend.helper.register('getGithubComments', getGithubComments);
