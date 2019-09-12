const initialState = [
    { title: "JavaScript: The Good Parts", pages: 101, numberOfClicks: 0 },
    { title: "The Dark Tower", pages: 20, numberOfClicks: 0 },
    { title: "Eloquent NodeJS", pages: 45, numberOfClicks: 0 }
];

export default function(state = initialState, action) {
    switch (action.type) {
        case "BOOK_SELECTED":
            return state
                .map(book => {
                    return book.title === action.payload.title
                        ? Object.assign({}, book, {
                                numberOfClicks: book.numberOfClicks + 1
                          })
                        : book;
                })
                .slice()
                .sort((book1, book2) => {
                    return book2.numberOfClicks - book1.numberOfClicks;
                });
        default:
            return state;
    }
    return state;
}