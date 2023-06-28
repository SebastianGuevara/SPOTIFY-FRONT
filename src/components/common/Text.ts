import styled from "styled-components";

export const LibraryContentTitleText = styled.span`
font-size: 1rem;
color: #FFFFFF;
`
export const LibraryContentSubtitleText = styled.span`
font-size: 0.9rem;
color: #A7A7A7;
`
export const LibraryFilterText = styled.span`
white-space: nowrap;
overflow: hidden;
text-overflow:ellipsis;
width: 100%;
text-align: end;
`
export const NotFountSubTitle = styled.span`
margin: 0px 0px 40px;
`

export const HelpNotFountText = styled.a`
&:hover{
    text-decoration: underline;
}
`
export const DashboardTitleText = styled.h1`
text-overflow: ellipsis;
overflow: hidden;
margin: 0;
font-size: 5vw;
font-family: Circular-bold;
`
export const DashboardSubtitle = styled.span`
font-family: Circular-Ligth;
color: rgba(255,255,255,0.7);
font-size: 0.8rem;
`
export const DashboardTitleSubtitle = styled.span`
display: inline-block;
line-height: 1.5;
font-family: Circular-Ligth;
font-size: 0.9rem;
a{
    font-family: Circular-Bold;
    &:hover{
        text-decoration: underline;
    }
}
span{
    color: rgba(255,255,255,0.7);
}
`