import styled from "styled-components";
import {title} from "../Styles/title";

export const FoodGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;
margin-bottom: 80px;

@media(max-width: 702px){ 
  grid-template-columns: 1fr 1fr; 
};
@media(max-width: 400px){ 
  grid-template-columns: 1fr; 
}
`
export const FoodLabel= styled(title)`
position: absolute;
background-color: rgba(255, 255, 255, .7);
padding:5px;

` 
export const Food = styled.div`
height: 150px;
padding: 10px;
font-size: 20px;
color: Red;
border-radius: 7px;
background-image: ${({img}) => `url(${img});`}
background-position:center;
background-size: cover;
filter: contrast(75%);
margin-top: 5px;
transition-properties:box-shadow margin-top filter;
transition-duration: .1s;
box-shadow: 0px 0px 2px 0px grey;
&:hover{
    cursor: pointer;
    filter: contrast(100%);
    margin-top:0px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 10px 0px grey;
}
`;