import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    @media(min-width: 1024px){
        padding: 1rem;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }
    @media(min-width: 768px) and (max-width: 1023px){
        grid-template-columns: repeat(1, 1fr);
    }
`
export const ContainerCandidates = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;    
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 5px;

    @media(min-width: 1024px){
        width: 45vw;
    }

    @media(min-width: 768px) and (max-width: 1023px){
        width: 100%;
    }
`
export const Candidates = styled.div`
    display: grid;
    overflow-y: auto;

    @media(min-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: 768px) and (max-width: 1023px){
        grid-template-columns: repeat(1, 1fr);
    }
`
export const ContainerDescriptionTrip = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;    
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 5px;

    @media(min-width: 1024px){
        width: 25vw;
    }

    @media(min-width: 768px) and (max-width: 1023px){
        width: 100%;
    }
`
export const Description = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const ContainerApproved = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;    
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 5px;

    @media(min-width: 1024px){
        width: 25vw;
    }

    @media(min-width: 768px) and (max-width: 1023px){
        width: 100%;
    }
`
export const Approved = styled.div`
    overflow-y: auto;
`
export const Header = styled.div`
    width: 100%;
    text-align: center;
    font-family: roboto;
    font-size: 46px;
`