import styled from "styled-components";

export const IntroductionWrapper = styled.article`
padding: 1rem;
`;

export const Introduction = styled.p`
background-color: var(--color-secondary);
corner-shape: squircle;
border-radius: 90px;
padding:1rem;
line-height: 1.5rem;
box-shadow: var(--box-shadow);
`;

export const Navigation = styled.nav`
padding:1rem;
display: flex;
justify-content:center;
gap: 50px;
`;

export const NavigationButton = styled.button`
padding: 0.5rem;
border-radius: 25px;
border-color: var(--color-secondary);
border: 3px solid var(--color-secondary);
background-color: var(--color-accent);

`;

export const AboutMe = styled.article`
background-color: var(--color-primary);
corner-shape: squircle;
border-radius: 90px;
padding:1rem;
line-height: 1.5rem;
box-shadow: var(--box-shadow);
`;