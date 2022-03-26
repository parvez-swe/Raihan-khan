const imageDiv = document.querySelector('.gallery-pic');
const h1 = document.createElement('h1');
h1.innerHTML='Hi'
imageDiv.appendChild(h1);
const baseUrl = '/Gallery/';
for(let i =1 ; i <= 22 ; i++){
      // images.classList.add('gallery');
      const images = document.createElement('img');
      images.src =`${baseUrl}/${i}.jpg`;
      const innerDiv = document.createElement('div');
      innerDiv.appendChild(images);
      innerDiv.classList.add('gallery');
      imageDiv.appendChild(innerDiv);
      document.body.appendChild(imageDiv)
}
