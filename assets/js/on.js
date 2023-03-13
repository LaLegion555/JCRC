// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD-EsMlcOMiSPqEpdftp9OUe-7O0mOd1x0",
  authDomain: "comentarios-6374d.firebaseapp.com",
  projectId: "comentarios-6374d",
  storageBucket: "comentarios-6374d.appspot.com",
  messagingSenderId: "375326567135",
  appId: "1:375326567135:web:b65cc47c6a30892193976a",
  measurementId: "G-37L6QBTTSP"
});


// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();



function guardar() {
  
  db.collection("usuario").add({
    comentario: document.getElementById("coment").value,
  })
    .then((docRef) => {
      alert("Gracias por ayudarme a mejorar!")
      console.log("Se agregó exitosamente ", comentario);
    })
    .catch((error) => {
      alert("ERROR!")
      console.error("Error adding document: ", error);
    });
}
//console.error("Error adding document: ", error);