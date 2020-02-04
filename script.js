
const departures = [ 
  {time: {hrs: 8, mins: 14}, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: '', track: 2},
  {time: {hrs: 8, mins: 19}, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: '', track: 2},
  {time: {hrs: 8, mins: 20}, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: '', track: 2},
  {time: {hrs: 8, mins: 37}, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: '', track: 2},
  {time: {hrs: 8, mins: 40}, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: '', track: 2},
  {time: {hrs: 8, mins: 43}, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: '', track: 2},
];

  const trainTime = document.querySelector('.board__table');
  for(let i = 0; i < departures.length; i++) {
    const trainDOM = document.createElement('tr');
    trainDOM.innerHTML = 
    `
    <td>${departures[i].time.hrs}:${departures[i].time.mins}</td>
    <td>${departures[i].train}</td>
    <td>${departures[i].no}</td>
    <td>${departures[i].to}</td>
    <td class='delay'>${departures[i].status}</td>
    <td>${departures[i].track}</td>
    <button class="isDelayed">Check if delayed</button>
    `;
    
    const delay = trainDOM.querySelector('.delay')
    const btn = trainDOM.querySelector('.isDelayed');
    btn.addEventListener('click', () => {
      if(delay.innerHTML === 'delayed') {
        delay.innerHTML = 'on time';
        departures[i].status = 'on time';
        console.log(departures)
        trainDOM.style.backgroundColor = '';
      } else {
        delay.innerHTML = 'delayed';
        departures[i].status = 'delayed';
        console.log(departures);
        trainDOM.style.backgroundColor = 'salmon';
      }
    });

    trainTime.appendChild(trainDOM);
  }
