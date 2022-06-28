export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      price: 40,
      coverImage:
        "https://s1.livelib.ru/boocover/1006176070/o/5641/Dzhordzh_Oruel__1984.jpeg",
      description:
        "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's lives.",
    },

    {
      id: 2,
      title: "Animal farm",
      author: "George Orwell",
      price: 30,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/91iKjJnXCJL.jpg",
      description:
        "Animal Farm is a satirical allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.",
    },

    {
      id: 3,
      title: "The Da Vinci code",
      author: "Dan Brown",
      price: 35,
      coverImage: "https://shop.relod.ru/upload/iblock/cc7/9780552161275.jpg",
      description:
        "The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.",
    },
    {
      id: 4,
      title: "Robinson Crusoe",
      author: "Daniel Defoe",
      price: 20,
      coverImage:
        "https://img4.labirint.ru/rc/21127058d1a6e0ce90018b3836c6cdec/363x561q80/books86/858298/cover.jpg?1652801106",
      description:
        "Book Summary. Robinson Crusoe, as a young and impulsive wanderer, defied his parents and went to sea. He was involved in a series of violent storms at sea and was warned by the captain that he should not be a seafaring man. Ashamed to go home, Crusoe boarded another ship and returned from a successful trip to Africa.",
    },
  ];

  getBooks() {
    return new Promise((resolve) => {
      resolve(this.data);
    });
  }
}
