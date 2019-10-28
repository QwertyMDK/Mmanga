var newsObject = {
    news: [
        {
            id: 1,
            type: "Статьи",
            title: "Интервью: Сува Митихико - продюсер Аниме detective conan",
            date: new Date(2019, 3, 7),
            author: "Мадияр Куанышбеков",
            img: "./img/1.jpg"
        },
        {
            id: 2,
            type: "Новости",
            title: "Манга Dai Dark автора Dorohedoro наконец стартовал!",
            date: new Date(2018, 11, 14),
            author: "Мадияр Куанышбеков",
            img: "./img/2.jpg"
        },
        {
            id: 3,
            type: "Новости",
            title: "Интервью: Сува Митихико - продюсер Аниме detective conan",
            date: new Date(2019, 3, 3),
            author: "Мадияр Куанышбеков",
            img: "./img/3.jpg"
        },
        {
            id: 4,
            type: "Новости",
            title: "Автор 'Акиры' спустя 38 лет выпускает ваншот к своей манге Kibun wa mo senso",
            date: new Date(2019, 3, 3),
            author: "Мадияр Куанышбеков",
            img: "./img/4.jpg"
        },
        {
            id: 5,
            type: "Новости",
            title: "Исаяма Хадзимэ показал финал манги 'Атаки титанов'",
            date: new Date(2018, 10, 19),
            author: "Мадияр Куанышбеков",
            img: "./img/5.jpg"
        }
    ]
}

console.log(newsObject);
console.log(newsObject.news);


var jsonObj = JSON.stringify(newsObject);
console.log(jsonObj);