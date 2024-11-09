function Book(props) {
 
    return (
        <div className="w-56 h-96 m-4 cursor-pointer transition-all overflow-hidden duration-150 hover:scale-105 rounded-lg border-2 border-slate-400  shadow-purple-300 hover:shadow-blue-400 shadow-lg">
            <img className="h-52 w-full" src={props.bookDetails.coverImage} alt=""/>
            <div className="p-2">
                <h2 className="font-bold text-lg">  {props.bookDetails.title}</h2>
                <p className="italic text-right text-sm">- By {props.bookDetails.author}</p>
                {/* <p>Published on : {props.bookDetails.publishedDate}</p> */}
                <p className="text-justify text-sm">{props.bookDetails.description}</p>
            </div>
        </div>
    )
}

export default Book;