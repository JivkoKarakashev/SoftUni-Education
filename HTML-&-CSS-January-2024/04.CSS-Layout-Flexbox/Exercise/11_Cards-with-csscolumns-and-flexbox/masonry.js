const row = document.querySelector('.cards-layout.masonry');
// console.log(row);
const imagesArr1 = ['images/Image1.jpg', 'images/Image2.jpg', 'images/Image3.jpg', 'images/Image4.jpg'];
const imagesArr2 = ['images/Image1.jpg', 'images/Image2.jpg', 'images/Image3.jpg', 'images/Image4.jpg'];
const imagesUrls = [...imagesArr1, ...imagesArr2];
// console.log(imagesUrls);
const columnsNum = 3;
const columnsArr = [...Array(columnsNum)].map(() => []);
// console.log(columnsArr);

fillColums();
renderColumns();

function fillColums() {
    imagesUrls.forEach((url, i) => {
        const currColumnNum = i % columnsNum;
        const card = createCard(url);
        columnsArr[currColumnNum].push(card);
    });
}

function createCard(imgUrl) {
    const div = document.createElement('div');
    div.classList.add('card');

    const img = document.createElement('img');
    img.setAttribute('src', imgUrl);

    const section = document.createElement('section');

    const h3 = document.createElement('h3');
    h3.textContent = 'Card Title';
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequuntur possimus quo enim eveniet, deserunt ducimus doloremque laudantium iure, ut inventore eaque fugit ex porro totam perspiciatis molestiae corporis. Odio!';
    section.append(h3, p);

    const footer = document.createElement('footer');
    footer.textContent = 'More interesting things about the thing';

    div.append(img, section, footer);

    return div;
}

function renderColumns() {
    const columns = [];
    columnsArr.forEach(col => {
        const column = document.createElement('div');
        column.classList.add('column');
        column.append(...col);
        columns.push(column);
    });
    row.append(...columns);
}