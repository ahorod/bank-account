function Account(name, balance) {
  this.name=name;
  this.balance=balance;
}
function resetFields() {
    $("input#name").val("");
    $("input#initial-deposit").val("");
}
Account.prototype.calculateBalance = function(deposit, withdrawal) {

  console.log(this.balance);
  console.log(deposit);
  if (deposit>0) {
    this.balance += deposit;
  }
  if (withdrawal>0) {
    this.balance -= withdrawal;
  }
  console.log(this.balance);
  endTotal= this.balance;
}

$(function() {
  $("#initialForm").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDesposit = parseInt($("input#initial-deposit").val());
    var newAccount = new Account(inputtedName, inputtedInitialDesposit);
    console.log(typeof newAccount.balance)
     $("#accounts ul").append("<li><span class='accounts'>" + newAccount.name + newAccount.balance + "</span></li>");

    $("#updateForm, #balance").show();
    $("#balance h3").text(newAccount.balance);

    resetFields();
    $(".accounts").last().click(function() {
      document.getElementById('name').value = newAccount.name;
      document.getElementById('initial-deposit').value = newAccount.balance;
    });
    $("#updateForm").submit(function(event) {
      event.preventDefault();
      var deposit = parseInt($("#deposit").val());
      var withdrawal = parseInt($("#withdrawal").val());
      newAccount.calculateBalance(deposit, withdrawal);
      $("#balance h3").text(endTotal);
      $("#deposit").val("");
      $("#withdrawal").val("");
    });
  });


});
