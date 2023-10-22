const commentsContainer = document.getElementById('comments-container');

function createComment(user, text) {
    const comment = document.createElement('div');
    comment.className = 'comment';

    const userImage = document.createElement('img');
    userImage.src = user.image;
    userImage.alt = 'User Profile Picture';

    const userInfo = document.createElement('div');
    userInfo.className = 'comment-text';
    userInfo.innerHTML = `
        <p>${user.name} <span>${getRandomTimeAgo()}</span></p>
        <p>${text}</p>
    `;

    const commentActions = document.createElement('div');
    commentActions.className = 'comment-actions';

    const replyLink = document.createElement('a');
    replyLink.className = 'reply-button';
    replyLink.href = '#';
    replyLink.textContent = 'Reply';

    const reportLink = document.createElement('a');
    reportLink.className = 'report-button';
    reportLink.href = '#';
    reportLink.textContent = 'Report';

    commentActions.appendChild(replyLink);
    commentActions.appendChild(reportLink);

    comment.appendChild(userImage);
    comment.appendChild(userInfo);
    comment.appendChild(commentActions);

    return comment;
}

function getRandomTimeAgo() {
    const hoursAgo = Math.floor(Math.random() * 24);
    return `(${hoursAgo}h ago)`;
}

// Exemplo de adição de comentários
commentsContainer.appendChild(createComment({
    name: 'User 1',
    image: 'user1.jpg',
}, 'Este é o primeiro comentário!'));

// Você pode adicionar mais comentários chamando createComment e anexando ao commentsContainer
