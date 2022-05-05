import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    ul{
        list-style: square;
    }

    input{
        height: 2rem;
    }
    select{
        height: 2.5rem;
    }
    input, select{
        border: none;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        padding: 0 1rem;
    }
`