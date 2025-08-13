// 공통적인 css를 변수에 담아 사용할 수 있도록 제공하는 파일

import { css } from "styled-components"

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const flexCenterColumn = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const flexCenterRow = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

/**자식과 자손
 *  &: 자기 자신 선택자
 *  & input {}
 */