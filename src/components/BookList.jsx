import Book from "./Book";

function BookList(props) {
    return (
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
            {props.booksData.map(data =>
                <Book bookDetails={data} />
            )}
        </div>
    )
}

export default BookList;