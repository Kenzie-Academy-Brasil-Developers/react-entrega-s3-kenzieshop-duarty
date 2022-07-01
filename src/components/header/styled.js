import styled from 'styled-components'

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    display: flex;
    text-align: center;
    justify-content: space-between;
    border-bottom: 1px solid #6a696c;
    flex-grow: 1;
    height: 70px;
    

    h1{
        display: flex;
        align-items: center;
        text-align: center;
        font-family: 'Lobster', cursive;
        color: #BF0B2C;
        font-size: 2rem;
        font-weight: bold;
    }
    figure{
        display: flex;
        align-items: center;

        button{
            background:none;
            border: none;
            outline: none;
            color: #BF0B2C;
            font-size: 30px;
            cursor: pointer;

        }
    }
`