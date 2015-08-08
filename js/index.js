function vanityGen() {
    var Accounts = new Accounts();

    var acountlength = Accounts.length;

    if (Accounts.length > 0) {
        Accounts.clear();
    }

    var acctpass = $("#new_passphrase").val();
    console.log(acctpass);
    var accountObject = accounts.new(acctpass);
    console.log(accountObject);
}