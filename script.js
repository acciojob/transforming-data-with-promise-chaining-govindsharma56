//your JS code here. If required.
let num=document.querySelector('#ip').value
let btn=document.querySelector('#btn');
let output=document.querySelector('#output');
btn.addEventListener('click', () => {

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    })

    .then((data) => {
        let result = data * 2;
        output.innerText = `Result: ${result}`;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result);
            }, 2000);
        });
    })

    .then((data) => {
        let result = data - 3;
        output.innerText = `Result: ${result}`;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result);
            }, 1000);
        });
    })

    .then((data) => {
        let result = data / 2;
        output.innerText = `Result: ${result}`;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result);
            }, 1000);
        });
    })

    .then((data) => {
        let result = data + 10;
        output.innerText = `Final Result: ${result}`;
    });
});