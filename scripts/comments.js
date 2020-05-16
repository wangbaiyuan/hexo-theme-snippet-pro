function getWPComments(siteData, post) {
    const comments = siteData['github-comments'].filter(c => (post.id && c.comment_post_ID === post.id.toString()));
    return comments;
}

function getGithubComments(siteData, post) {
    const comments = siteData['github-comments'].filter(c => (c.comment_post_hashID === hashIdOfPost(post)));
    return comments;
}

hexo.extend.helper.register('getWPComments', getWPComments);
hexo.extend.helper.register('getGithubComments', getGithubComments);
