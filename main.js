 // Examen JavaScript Amaliy savollar 

 // 1-savol Arifmetik operatorla

 //  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

 // разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

 // javob:Pasdan yozib keting kodini


 // alert(5 % 2)


// 2-savol  Math metodlari

 // 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini


 // alert(Math.round(Math.random() * 10) + 1)



// 3-savol Math metodlari

 // 12.510 sonini butun songa aylantiring! 

 // сделать число 12.510 целым

 // ответ должен выйти 12

 // javob: 12 chiqishi kerak!

 // let son = Math.floor(12.510)
 // alert(son)




// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

 // Javob:Kodini yozib bering 


  //     let soz ="MARS IT SCHOOL"


//     function harf(soz) {
 //         return soz.length
 //     }
 //     
 // alert(harf(soz))


// 5-savol for loop

 // "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

 // С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// for(let index = 0;index < 10; index++ ){
//     console.log("MARS IT SCHOOL")
// }

 // 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

 // Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

 // С помощью этого массива вывести в консоль свое имя

 // Javob:Kodini yozib bering
 // let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// console.log(harflar[3],harflar[10],harflar[17],harflar[6],harflar[13],harflar[2]);


 // 7-savol if else

 // Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

 // Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

 // Javob:Kodini yozib bering


 // let yosh =+prompt("Yoshingizni kiritng")

 // if(yosh > 18){
//     console.log("Tabriklaymiz siz balogat yoshidasiz");
// }else if(yosh >= 18){
//     console.log("Siz balag'ot yoshidasiz");
// }else{
//     console.log("Afsus Siz balog'at yoshidmassiz");
// }

 // 8-savol String metodlari vs Array metodlari

 // Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

 // Ввести в промпт свое имя и вывести в консоль его наоборот

 // Javob:Kodini yozib bering

// let ism = prompt("Ismingizni kiriting");

// console.log(ism.split("").reverse().join(""));

// 10-savol Array metodlari

 // let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 // shu arraydagi juft sonlarni console ga chiqaring

 // найти и вывести четные массивы в консоль, с помощью методов

 // Javob :Kodini yozib bering

 // let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i <= sonlar.length; i++) {
//     if (sonlar[i] % 2 === 0) {
//         console.log(sonlar[i]);
//     }
    
// }
