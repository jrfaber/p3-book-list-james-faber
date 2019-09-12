export function selectBook(book){
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

// If you had other action creators, just list them all
// one by one here.