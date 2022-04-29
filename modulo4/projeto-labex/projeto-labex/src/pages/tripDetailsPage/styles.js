import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
`
export const ContainerCandidates = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45vw;
    height: 80vh;    
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 5px;
`
export const Candidates = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
    overflow-y: auto;
`
export const ContainerDescriptionTrip = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    height: 80vh;    
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 5px;
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;    
`
export const ContainerApproved = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    height: 80vh;    
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 5px;
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