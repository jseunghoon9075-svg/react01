import React, { Children, useContext, useState } from 'react';
import Animal from './Animal';
import { animalsContext, AnimalsProvider } from './animalsContext';

const Animals = () => {


    return (
        <div>
        </div>  
    );
};

export default Animals;
/**
 *  문제 
 *  1. context에 저장된 동물 세 마리를 버튼으로 화면에 출력한다
 *      - 화면 기본 구조 구상하기
 *      - 저장된 초기값을 반복문으로 돌려서 화면에 버튼으로 출력력
 *  2. input태그를 하나 만들어 동물을 입력 후 엔터를 치면 동물 버튼이 추가된다.
 *  3. 각 동물 버튼을 클릭하면 해당 버튼이 삭제된다.
 *  단, context에 insert(), remove()의 메서드를 이용하여 추가 및 삭제 해야한다.
 *  4. 각 버튼은 Styled 컴포넌트의 Button으로 제작되어야 한다
 */
