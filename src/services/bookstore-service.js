
export default class BookstoreService {
    getBooks() {
        return [
            {id: 1, 
            title: '1984',
            author: 'George Orwell',
            price: 40,
            coverImage: 'https://s1.livelib.ru/boocover/1006176070/o/5641/Dzhordzh_Oruel__1984.jpeg'
            },

            {id: 2,
            title: 'Animal farm',
            author: 'George Orwell',
            price: 30,
            coverImage: 'https://images.wbstatic.net/big/new/3500000/3508112-1.jpg'}
        ];
    }
}