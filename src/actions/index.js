export function selectBook(book) {
    // is an action creator that returns an action,
    // an object with a type property
    console.log(book);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
