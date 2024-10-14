// Массив массивов пользователей
const users = [
    ["Alice", 25, true],
    ["Bob", 30, true],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

function filterAndSortUsers(arr) {

    let filtered = arr.filter((userInfo) => (userInfo[1] > 25 && userInfo[2] === true));
    
    let sorted = filtered.sort((user1, user2) => user1[1] - user2[1])
    
    let names = sorted.map(info => info[0])
    return names
}

const sportUsersOver25 = filterAndSortUsers(users)
console.log(sportUsersOver25)
