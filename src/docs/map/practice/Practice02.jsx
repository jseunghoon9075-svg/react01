import React from 'react';

const Practice02 = () => {

    const books = [
        { id: 1, title: 'React Basics', published: true, publisher: 'Manning' },
        { id: 2, title: 'Advanced Hooks', published: true, publisher: 'Oreilly' },
        { id: 3, title: 'JSX in Depth', published: false, publisher: 'Packt' },
    ]
    // 출판이 된 여부 확인
    const publisheds = books.filter(book => book.published);

    return (
        <>
            {publisheds.length && <h2>Published Books</h2>}
            {publisheds.length ?
                publisheds.map(book =>
                    <article key={book.id}>
                        <strong>{book.title}</strong>
                        <em> - {book.publisher}</em>
                    </article>
                )
                : <p>No Published books found</p>
            }
        </>
    );
};

export default Practice02;