document.addEventListener('DOMContentLoaded', () => {

    const rating1 = document.querySelector('#button-1');
    const rating2 = document.querySelector('#button-2');
    const rating3 = document.querySelector('#button-3');
    const rating4 = document.querySelector('#button-4');
    const rating5 = document.querySelector('#button-5');

    const ratingDiv = document.querySelector('.rating-div');
    const successDiv = document.querySelector('.success-div');

    const ratingArray = [rating1, rating2, rating3, rating4, rating5];

    const ratingP = document.querySelector('#success-dynamic-text');

    let activeButtonValue = 1;

    const ratingClick = e => {
        for (let i = 0; i < ratingArray.length; i++) {
            if (ratingArray[i].classList[1] === 'active-button') {
                ratingArray[i].classList.remove('active-button');
            }
        };

        if (e.target.id.includes('button-')) {
            e.target.classList.add('active-button');
            activeButtonValue = e.target.value;
        }
    };

    const submitEvent = () => {
        ratingDiv.classList.add('is-hidden');
        successDiv.classList.remove('is-hidden');

        ratingP.innerHTML = `You selected ${activeButtonValue} out of 5`;
    }

    document.querySelectorAll('.rating-button').forEach(btn => {
        btn.addEventListener('click', ratingClick)
    });

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        submitEvent();
    });

})