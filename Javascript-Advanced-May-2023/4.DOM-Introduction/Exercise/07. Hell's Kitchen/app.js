function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const bestRestSort = (restsArr) => {
         restsArr.sort((restA, restB) => restB[restB.length - 2] - restA[restA.length - 2]);
      }
      const workersSort = (restsArr) => {
         for (let currRest of restsArr) {
            currRest[1].sort((workA, workB) => workB[1] - workA[1]);
         }
      }

      const restListObj = {};
      const nodesStr = document.querySelector('div#inputs textarea').value;
      const bestRestTxtArea = document.querySelector('div#outputs div#bestRestaurant p');
      const bestRestWorkersTxtArea = document.querySelector('div#outputs div#workers p');
      const nodesArr = JSON.parse(nodesStr);
      // console.log(nodesArr);
      for (let restLine of nodesArr) {
         let [restName, workersLine] = restLine.split(' - ');
         if (!restListObj.hasOwnProperty(restName)) {
            restListObj[restName] = [];
         }
         let workersArr = workersLine.split(', ');
         for (let worker of workersArr) {
            let [name, slary] = worker.split(' ');
            slary = Number(slary);
            restListObj[restName].push([name, slary]);
         }
      }
      const restListArr = Object.entries(restListObj);
      // console.log(restListArr);
      for (let currRest of restListArr) {
         let avgSalary = (currRest[1].reduce((acc, el) => acc += el[1], 0)) / currRest[1].length;
         let slariesArr = [];
         for (let worker of currRest[1]) {
            slariesArr.push(worker[1]);
         }
         let bestSalary = Math.max(...slariesArr);
         // console.log(bestSalary);
         currRest.push(avgSalary, bestSalary);
      }
      // console.log(restListArr);
      bestRestSort(restListArr);
      workersSort(restListArr);
      // console.log(restListArr);
      const bestRest = restListArr[0][0];
      const avgSalary = restListArr[0][restListArr[0].length - 2];
      const bestSalary = restListArr[0][restListArr[0].length - 1];
      let bestRestStr = `Name: ${bestRest} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      // console.log(bestRestStr);
      bestRestTxtArea.textContent = bestRestStr;
      let bestRestWorkersStr = '';
      for (let i = 0; i < restListArr[0][1].length; i++) {
         let [worker, salary] = restListArr[0][1][i];
         bestRestWorkersStr += `Name: ${worker} With Salary: ${salary} `;
      }
      // console.log(bestRestWorkersStr);
      bestRestWorkersTxtArea.textContent = bestRestWorkersStr;
   }
   // onClick('["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]')
   // console.log('------------');
   // onClick('["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]')
   // console.log('------------');
   // onClick('["Mikes - Steve 800, Ivan 1200","Fleet - Maria 1001"]')
   // console.log('------------');
   // onClick('["Mikes - Steve 800, Ivan 1200","Fleet - Maria 800","Fleet - Jivko 1201"]')
}