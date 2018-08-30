const name = 'Alex';
const age = 35;
const job = 'Web Developer';
const town = 'Middleton';

// Without template strings (ES5 way)

let myHtml = '<ul><li>Name: ' + name +'</li><li>Age: ' + age +'</li><li>Job: ' + job +'</li><li>Town: ' + town +'</li></ul>';

document.body.innerHTML = myHtml;

// With template strings (ES6)

function hello() {
    return 'Hello';
}

let myHtml1 = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>Town: ${town}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = myHtml1;
