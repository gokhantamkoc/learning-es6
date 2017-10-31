// Private methods

const budget = () => {
    let balance = 0;

    let changeBal = (val) => {
        return balance += val;
    }

    const deposit20 = () => changeBal(20);

    const withdraw20 = () => changeBal(-20);

    const checkBal = () => balance;

    // return {
    //     deposit20: deposit20,
    //     withdraw20: withdraw20,
    //     checkBal: checkBal
    // }
    // we can replace the return using below code
    return { deposit20, withdraw20, checkBal }
}

let wallet = budget();
console.log(wallet);
wallet.deposit20();
console.log(wallet.checkBal());
wallet.withdraw20();
console.log(wallet.checkBal());
// console.log(wallet.balance); this will log 'undefined' because it is unreachable from global scope.
// we need to add balance to return {} in order to reach it from global scope.