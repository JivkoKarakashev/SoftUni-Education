function posts() {

    class Post {

        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        comments = [];

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
        }

        toString() {
            super.toString();
            if (this.comments.length) {
                const processedCommentsArrForPrint = [];
                this.comments.forEach(comment => processedCommentsArrForPrint.push(` * ${comment}`));
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments:\n${processedCommentsArrForPrint.join('\n')}`;
            } 
            return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
        }

        addComment(comment) {
            this.comments.push(comment);
        }
    }

    class BlogPost extends Post {

        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            super.toString();
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = posts();
let post = new classes.Post("Post", "Content");
 console.log(post.toString()); 
 // Post: Post 
 // Content: Content
 let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30); 
 scm.addComment("Good post"); 
 scm.addComment("Very good post"); 
 scm.addComment("Wow!"); 
 console.log(scm.toString()); 
 // Post: TestTitle 
 // Content: TestContent 
 // Rating: -5 
 // Comments: 
 // * Good post 
 // * Very good post 
 // * Wow!