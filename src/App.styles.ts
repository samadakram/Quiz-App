import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    html { 
        height: 100%;
    }

    body {
        backgroud-image: url(${BGImage});
    }

`