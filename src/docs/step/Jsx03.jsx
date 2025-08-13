

const Jsx03 = () => {

    const name = "전승훈";
    const age = 28;
    const originAge = age - 1;
    const msg = `안녕하세요 저는 ${name}이고, 나이는 ${age}살 만으로는 ${originAge}살 입니다`

    return (
        <>
            <strong>{msg}</strong>
        </>
    );
}

export default Jsx03;