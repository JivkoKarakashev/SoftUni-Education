function solve() {
    class ArtGallery {
        #personalityPointsCalcFunc = (personality) => {
            let points = 50;
            const persoanlObj = {
                'Vip': 500,
                'Middle': 250,
            };
            if (persoanlObj.hasOwnProperty(personality)) {
                points = persoanlObj[personality];
            }
            return points;
        };
        constructor(creator) {
            this.creator = creator;
            this.possibleArticles = {
                "picture": 200,
                "photo": 50,
                "item": 250
            };
            this.listOfArticles = [];
            this.guests = [];
        }
        addArticle(articleModel, articleName, quantity) {
            const articModelToLowerCase = articleModel.toLowerCase();
            const articleIdx = this.listOfArticles.findIndex((artObj) => artObj['articleName'] === articleName);
            if (!this.possibleArticles.hasOwnProperty(articModelToLowerCase)) {
                throw new Error('This article model is not included in this gallery!');
            }
            if (articleIdx !== -1 && this.listOfArticles[articleIdx]['articleModel'] === articleModel) {
                this.listOfArticles[articleIdx]['quantity'] += quantity;
            } else if (articleIdx === -1) {
                this.listOfArticles.push({ 'articleModel': articModelToLowerCase, articleName, quantity });
            }
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }
        inviteGuest(guestName, personality) {
            const guestIdx = this.guests.findIndex((guestObj) => guestObj['guestName'] === guestName);
            if (guestIdx !== -1) {
                throw new Error(`${guestName} has already been invited.`);
            }
            const points = this.#personalityPointsCalcFunc(personality);
            this.guests.push({ guestName, points, 'purchaseArticle': 0 });
            return `You have successfully invited ${guestName}!`;
        }
        buyArticle(articleModel, articleName, guestName) {
            const articleIdx = this.listOfArticles.findIndex((artObj) => artObj['articleName'] === articleName);
            const guestIdx = this.guests.findIndex((guestObj) => guestObj['guestName'] === guestName);
            if (articleIdx === -1 || this.listOfArticles[articleIdx].articleModel !== articleModel) {
                throw new Error('This article is not found.');
            }
            if (this.listOfArticles[articleIdx].quantity === 0) {
                return `The ${articleName} is not available.`;
            }
            if (guestIdx === -1) {
                return 'This guest is not invited.';
            }
            const guestPoints = this.guests[guestIdx].points;
            const articlePoint = this.possibleArticles[articleModel];
            if (guestPoints < articlePoint) {
                return 'You need to more points to purchase the article.';
            } else {
                this.guests[guestIdx].points -= articlePoint;
                this.listOfArticles[articleIdx].quantity -= 1;
                this.guests[guestIdx].purchaseArticle += 1;
            }
            return `${guestName} successfully purchased the article worth ${articlePoint} points.`;
        }
        showGalleryInfo(criteria) {
            const outputArray = [];
            let firstLine = '';
            if (criteria === 'article') {
                firstLine = 'Articles information:';
                for (let artObj of this.listOfArticles) {
                    outputArray.push(`${artObj.articleModel} - ${artObj.articleName} - ${artObj.quantity}`);
                }
            } else if (criteria === 'guest') {
                firstLine = 'Guests information:';
                for (let guestObj of this.guests) {
                    outputArray.push(`${guestObj.guestName} - ${guestObj.purchaseArticle}`);
                }
            }
            return `${firstLine}\n${outputArray.join('\n')}`;
        }
    }
    // const artGallery = new ArtGallery('Curtis Mayfield');
    // console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
    // console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
    // console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
    // console.log('---------------------------------------------------');
    // const artGallery = new ArtGallery('Curtis Mayfield');
    // console.log(artGallery.inviteGuest('John', 'Vip'));
    // console.log(artGallery.inviteGuest('Peter', 'Middle'));
    // console.log(artGallery.inviteGuest('John', 'Middle'));
    // console.log('---------------------------------------------------');
    // const artGallery = new ArtGallery('Curtis Mayfield');
    // artGallery.addArticle('picture', 'Mona Liza', 3);
    // artGallery.addArticle('Item', 'Ancient vase', 2);
    // artGallery.addArticle('picture', 'Mona Liza', 1);
    // artGallery.inviteGuest('John', 'Vip');
    // artGallery.inviteGuest('Peter', 'Middle');
    // console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
    // console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
    // console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
    console.log('---------------------------------------------------');
    const artGallery = new ArtGallery('Curtis Mayfield');
    artGallery.addArticle('picture', 'Mona Liza', 3);
    artGallery.addArticle('Item', 'Ancient vase', 2);
    artGallery.addArticle('picture', 'Mona Liza', 1);
    artGallery.inviteGuest('John', 'Vip');
    artGallery.inviteGuest('Peter', 'Middle');
    artGallery.buyArticle('picture', 'Mona Liza', 'John');
    artGallery.buyArticle('item', 'Ancient vase', 'Peter');
    console.log(artGallery.showGalleryInfo('article'));
    console.log(artGallery.showGalleryInfo('guest'));
}

solve()