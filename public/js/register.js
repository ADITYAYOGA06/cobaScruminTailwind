document.getElementById("submit").disabled = true;

function agree() {
  if (document.getElementById('checkbox-1').checked) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
}

// let checbox = document.querySelector("#checkbox-1")
// function agree2() {
//     if (document.getElementById('agree').checked && document.getElementById('submit')==onclick) {
//       document.getElementById("submit").disabled = false;
//     } else {
//       alert('Please check the term n conditions')
//     }
//   }