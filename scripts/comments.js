function validComments(allComments, post) {
    const validComments = allComments.filter(c => (c.comment_post_ID === post.id.toString() && c.comment_approved === '1'));
    return validComments;
}

hexo.extend.helper.register('validComments', validComments);
