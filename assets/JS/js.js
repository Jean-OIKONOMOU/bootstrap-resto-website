
//document.getElementById("MyElement").classList.toggle('MyClass');
/*  document.querySelector('button').addEventListener('click', function() {
  const icon = this.querySelector('i');
  const text = this.querySelector('span');

  if (icon.classList.contains('fa-anchor')) {
    icon.classList.remove('fa-anchor');
    icon.classList.add('fa-adobe');
    text.innerHTML = 'Hide';
  } else {
    icon.classList.remove('fa-adobe');
    icon.classList.add('fa-anchor');
    text.innerHTML = 'Hide';
  }
});*/
(function() {

var gallery = [
  "assets/img/indexPics/noahs-knight.jpg",
  "assets/img/indexPics/sharon-chen.jpg",
  "assets/img/indexPics/tran-mau-tri-tam.jpg",
  "assets/img/indexPics/kimia-zarifi.jpg",
];

var galleryNom = [
  "Noahs Knight",
  "Sharon Chen",
  "Tran Mau-Tri-Tam",
  "Kimia Zarifi",
];

i = 1;

    document.getElementById("carousel").addEventListener("click", function() {

      document.getElementById("carousel").setAttribute('src', gallery[i]);
      document.getElementById("photographer").innerHTML = galleryNom[i];
      i++;

      if(i == gallery.length){
        i = 0;
      }

        if(i == galleryNom.length){
           i = 0;
         }

    });
})();
