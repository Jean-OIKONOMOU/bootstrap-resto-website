(function() {

  // NAME FUNCTION
  var myName = sessionStorage.getItem("myName");

  if (!myName) {
    myName = prompt("Cher visiteur, quel est votre prénom?");
    sessionStorage.setItem("myName", myName);
  }
  document.getElementById("promptname").textContent = myName;

  //IMAGE+NAME CAROUSEL
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

    if (i == gallery.length) {
      i = 0;
    }

    if (i == galleryNom.length) {
      i = 0;
    }

  });


})();
