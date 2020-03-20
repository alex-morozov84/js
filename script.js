let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}

start();

console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true,
    chooseExpences: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько это обойдется?', '');
        
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expences[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
                
            appData.monthIncome = (save / 100 / 12 * percent).toFixed();
    
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpences: function() {
        for (let i = 0; i < 3; i++) {
            let expence = prompt("Статья необязательных расходов?");
            while (expence == '' || expence == null) {
                expence = prompt("Статья необязательных расходов?");
            }
        appData.optionalExpences[i + 1] = expence;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? Перечислите через запятую", '');
        while (items == '' || typeof(items) == null || typeof(items) !== 'string') {
            items = prompt("Что принесет дополнительный доход? Перечислите через запятую", '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?", ''));
        appData.income.sort();
        appData.income.forEach(function(item, i) {
            document.write("Способы доп. заработка: " + (i+1) + ': ' + item);
        });
    }
};

// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько это обойдется?', '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expences[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// } while (i < 2);


for (let key in appData) {
    console.log("Наша программа включает в себя данные:");
    console.log('Свойство ' + key + "имеет значение: " + appData[key]);
}

