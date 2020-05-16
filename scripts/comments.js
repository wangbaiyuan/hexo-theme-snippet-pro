function getWPComments(siteData, post) {
    if(!siteData['wp-comments']) {
        return []
    }
    return siteData['wp-comments'].filter(c => (post.id && c.comment_post_ID === post.id.toString()));;
}

function getGithubComments(siteData, post) {
    if(!siteData['github-comments']) {
        return []
    }
    return siteData['github-comments'].filter(c => (c.comment_post_hashID === hashIdOfPost(post)));
}

hexo.extend.helper.register('getWPComments', getWPComments);
hexo.extend.helper.register('getGithubComments', getGithubComments);
