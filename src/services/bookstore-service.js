export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Three Comrades",
      author: "Erich Maria Remarque",
      price: 50,
      coverImage: "https://cv6.litres.ru/pub/c/cover_max1500/32544665.jpg",
      description:
        "Three Comrades (German: Drei Kameraden) is a 1936 novel by the German author Erich Maria Remarque. It is written in first person by the main character Robert Lohkamp, whose somewhat disillusioned outlook on life is due to his horrifying experiences in the trenches of the First World War's French-German front. He shares these experiences with Otto Köster and Gottfried Lenz, his two comrades with whom he runs an auto-repair shop in what may be late-1920s Berlin. ",
    },
    {
      id: 2,
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      price: 40,
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG",
      description:
        "The Little Prince is an honest and beautiful story about loneliness, friendship, sadness, and love. The prince is a small boy from a tiny planet (an asteroid to be precise), who travels the universe, planet-to-planet, seeking wisdom. On his journey, he discovers the unpredictable nature of adults.",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "	F. Scott Fitzgerald",
      price: 45,
      coverImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
      description:
        "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's lives.",
    },
    {
      id: 4,
      title: "Fight Club",
      author: "Chuck Palahniuk",
      price: 40,
      coverImage:
        "https://anylang.net/sites/default/files/covers/fight-club.jpg",
      description:
        "Fight Club is a 1996 novel by Chuck Palahniuk. It follows the experiences of an unnamed protagonist struggling with insomnia. Inspired by his doctor's exasperated remark that insomnia is not suffering, the protagonist finds relief by impersonating a seriously ill person in several support groups.",
    },
    {
      id: 5,
      title: "1984",
      author: "George Orwell",
      price: 40,
      coverImage:
        "https://s1.livelib.ru/boocover/1006176070/o/5641/Dzhordzh_Oruel__1984.jpeg",
      description:
        "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's lives.",
    },

    {
      id: 6,
      title: "Animal farm",
      author: "George Orwell",
      price: 30,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/91iKjJnXCJL.jpg",
      description:
        "Animal Farm is a satirical allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.",
    },

    {
      id: 7,
      title: "The Da Vinci code",
      author: "Dan Brown",
      price: 35,
      coverImage: "https://shop.relod.ru/upload/iblock/cc7/9780552161275.jpg",
      description:
        "The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.",
    },
    {
      id: 8,
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
