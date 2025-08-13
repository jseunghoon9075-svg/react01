import React, { useState } from 'react';

const LikesContainer = () => {

    // 1. likeList를 화면에 출력한다.
    // 2. 버튼을 누르면 해당 like를 삭제한다
    // 3. input 태그를 하나 생성 후 좋아하는 목록을 적고 엔터를 치면, 리스트에 추가된다.
    // 버튼을 누르면 해당 리스트의 같은 키 값을 가지고있는 요소를 삭제해보자

    const [change, setChange] = useState([
        {
            name: "운동"
        },
        {
            name: "게임"
        },
        {
            name: "음악"
        },
        {
            name: "코딩"
        },
    ])

    const removeList = (idx) => {
        setChange(change.filter((like, i) => i !== idx))
    }

    const listName = change.map(({ name }, i) => {
        return (
            <button key={i} onClick={(e) => removeList(i)}>
                        {name}
            </button>
        )
    })

    return (
        <ul>
            {listName}
        </ul>
    );
};

export default LikesContainer;