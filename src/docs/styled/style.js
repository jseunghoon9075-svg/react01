/**
 *  중복된 컴포넌트 구별하는 방법
 *  스타일을 객체화 해서 객체화 한 스타일드 컴포넌트만 내보낸다다.
 * const S = {}
 * 
 * S.Box = styled.div`
 * 
//  */
// const Box = styled.div`
//     width: 200px;
//     height: 200px;
//     border: 1px solid black;
//     border-radius: 8px;
// `;

// export const P = styled.p`
//     font-size: 30px;
// `

// export const H1 = styled.h1`
//     font-size: 24px;
// `

// A.Div = styled.div`
// width: 150px;
// height: 150px;
// background-color: #433233;
// `
// A.Button = styled.button`
// border: none;
// font-size: 20px;
// `
// A.P = styled.p`
// color: ${(props) => props.fontColor};

// `
// A.H1 = styled.h1`
// color : ${(props) => props.color}
// `
import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../styles/common";
const A = {}

    A.Box = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid gray;
    ${flexCenter}
    `

    A.Ul = styled.ul`
    display: flex;
    ${flexCenter}
    `
    A.Form = styled.form`
    ${flexCenterColumn}
    `
    A.Wrap = styled.div`
    ${flexCenterColumn}`


    A.P = styled.p`
    font-family: 'WantedSansStd-ExtraBlack';
    font-weight: 950;
    `

    A.ThemeButton = styled.button`
    `
    A.Input = styled.input`
        color: ${(({theme}) => theme.PALLETE.secondary)};
    `

export default A

// Div, Button
// Div:Width, height 100px, background-color
// Button: border, fontsize,