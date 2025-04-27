function extractEmails(inputString) {

    const emailRegex = /[^\.|\-|\_]\b[A-Za-z0-9]+[\.|\-|\_]?[A-Za-z0-9]+\@[A-Za-z0-9]+[\-]?[A-Za-z0-9]+\.[A-Za-z0-9]+(\.[A-Za-z0-9]+)*\b/g;

    let validMail = emailRegex.exec(inputString);

    while (validMail) {
        console.log(validMail[0]);
        validMail = emailRegex.exec(inputString);
    }
}

// extractEmails('Please contact us at: support@github.com.')
// console.log('--------------------------');
// extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
// console.log('--------------------------');
// extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.')
console.log('--------------------------');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- : info@softuni-bulgaria.org.')