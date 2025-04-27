function comments(inputArray) {

    const sortByCommentsCount = (artListArr) => {
        artListArr.sort((artA, artB) => {
            if (artA[1].length === artB[1].length) {
                return artA[0].localeCompare(artB[0]);
            } else {
                return artB[1].length - artA[1].length;
            }
        });
    }
    const sortByUserName = (artListArr) =>{ 
        for (let artLine of artListArr) {
            return artLine[1].sort((usrA, usrB) => usrA[0].localeCompare(usrB[0]));
        }      
    }

    const usersArray = [];
    const articlesArray = [];
    const articlesListObj = {};

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
        let userArticlePair, titleCommentPair, user, article, title, comment;
        if (inputArray[i].includes('user ')) {
            [, user] = inputArray[i].split('user ');
            if (!usersArray.includes(user)) {
                usersArray.push(user);
            }
        } else if (inputArray[i].includes('article ')) {
            [, article] = inputArray[i].split('article ');
            if (!articlesArray.includes(article)) {
                articlesArray.push(article);
                articlesListObj[article] = [];
            }
        } else {
            [userArticlePair, titleCommentPair] = inputArray[i].split(': ');
            [user, article] = userArticlePair.split(' posts on ');
            [title, comment] = titleCommentPair.split(', ');
            if (usersArray.includes(user) && articlesArray.includes(article)) {
                let userTitleCommentArray = Array.of(user, title, comment);
                articlesListObj[article].push(userTitleCommentArray);
            }
        }

    }
    // console.log(articlesListObj);
    const articlesListArr = Object.entries(articlesListObj);
    sortByCommentsCount(articlesListArr);
    sortByUserName(articlesListArr);
    // console.log(articlesListArr);
    for (let currArticle of articlesListArr) {
        console.log(`Comments on ${currArticle[0]}`);
        for (let currUser of currArticle[1]) {
            console.log(`--- From user ${currUser[0]}: ${currUser[1]} - ${currUser[2]}`);
        }
    }
}

comments(
    [
        'user aUser123',
        'someUser posts on someArticle: NoTitle, stupidComment',
        'article Books',
        'article Movies',
        'article Shopping',
        'user someUser',
        'user uSeR4',
        'user lastUser',
        'uSeR4 posts on Books: I like books, I do really like them',
        'uSeR4 posts on Movies: I also like movies, I really do',
        'someUser posts on Shopping: title, I go shopping every day',
        'someUser posts on Movies: Like, I also like movies very much'
    ])
console.log('-------------------------------------------------------------')
comments(
[   'user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'
])