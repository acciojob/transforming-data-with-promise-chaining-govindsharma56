let btn = document.querySelector('#btn');
let output = document.querySelector('#output');

btn.addEventListener('click', () => {

    let num = Number(document.querySelector('#ip').value);

    // Initial Promise - 2 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    })

    // Initial Result + multiply by 2
    .then((data) => {
        output.innerText = `Result: ${data}`;

        let result = data * 2;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result);
            }, 2000);
        });
    })

    // Subtract 3
    .then((data) => {
        let result = data - 3;
        output.innerText = `Result: ${result}`;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result);
            }, 1000);
        });
    })

    // Divide by 2
    .then((data) => {
        let result = data / 2;
        output.innerText = `Result: ${result}`;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result);
            }, 1000);
        });
    })

    // Add 10
    .then((data) => {
        let result = data + 10;
        output.innerText = `Final Result: ${result}`;
    });
});