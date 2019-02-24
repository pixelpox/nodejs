console.log('Client-side code running');

function something(){
  console.log('click');

  var myData = ['button1' , 'RGB']

  fetch('/clicked', {method: 'POST' , body: JSON.stringify(myData)})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
}
/*
const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
});
*/
