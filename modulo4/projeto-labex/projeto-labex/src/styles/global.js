import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    p, h1{
        font-weight: 700;
        font-family: roboto;
    }

    ul{
        list-style: square;
    }

    h1, h2{
        font-size: 46px;
        color: rgba(61, 62, 62, 1);
    }

    img{
        width: 90%;
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