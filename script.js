var iphonePrice = 1219;
var casePrice = 59;
var iphoneQuantity = parseInt(document.getElementById("iphone-quantity").value);
var caseQuantity = parseInt(document.getElementById("case-quantity").value);
var subtotal = 0;
var vat = 0;
var total = 0;

function updatePrice() {
  subtotal = iphoneQuantity * iphonePrice + caseQuantity * casePrice;
  vat = subtotal * 0.15;
  total = vat + subtotal;
  console.log(subtotal, vat, total);
  document.getElementById("subtotal").innerHTML = "$" + subtotal;
  document.getElementById("vat").innerHTML = "$" + vat.toFixed(2);
  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

function btnPlusAction(id, flag) {
  const content = document.getElementById(id);
  var quantity = parseInt(content.value);
  quantity++;
  if (flag == 1) {
    content.value = iphoneQuantity = quantity;
  } else if (flag == 2) {
    content.value = caseQuantity = quantity;
  }
  console.log(id, quantity);
  updatePrice();
}

function btnMiusAction(id, flag) {
  const content = document.getElementById(id);
  var quantity = parseInt(content.value);
  if (quantity > 0) {
    quantity--;
    if (flag == 1) {
      content.value = iphoneQuantity = quantity;
    } else if (flag == 2) {
      content.value = caseQuantity = quantity;
    }
    console.log(id, quantity);
    updatePrice();
  }
}

function btnRemoveAction(id, flag) {
  const content = document.getElementById(id);
  var quantity = parseInt(content.value);
  quantity = 0;
  if (flag == 1) {
    content.value = iphoneQuantity = quantity;
  } else if (flag == 2) {
    content.value = caseQuantity = quantity;
  }

  console.log(id, quantity);
  updatePrice();
}

const iPhonePlusButton = document.getElementById("iphone-plus");
iPhonePlusButton.addEventListener("click", function() {
  btnPlusAction("iphone-quantity", 1);
});

const iPhoneMinusButton = document.getElementById("iphone-minus");
iPhoneMinusButton.addEventListener("click", function() {
  btnMiusAction("iphone-quantity", 1);
});

const casePlusButton = document.getElementById("case-plus");
casePlusButton.addEventListener("click", function() {
  btnPlusAction("case-quantity", 2);
});

const caseMinusButton = document.getElementById("case-minus");
caseMinusButton.addEventListener("click", function() {
  btnMiusAction("case-quantity", 2);
});

const iPhoneRemoveButton = document.getElementById("rmv-phn");
iPhoneRemoveButton.addEventListener("click", function () {
  btnRemoveAction("iphone-quantity", 1);
});

const caseRemoveButton = document.getElementById("rmv-case");
caseRemoveButton.addEventListener("click", function () {
  btnRemoveAction("case-quantity", 2);
});


document.onreadystatechange = function() {
  updatePrice();
};
