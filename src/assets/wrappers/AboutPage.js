import styled from "styled-components";

const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
  h4 {
    margin-right: 0.5rem;
    margin-top: 2rem;
    padding-top: 2rem;
    /* background: var(--primary-300); */

    /* border-radius: var(--borderRadius); */
    color: var(--primary-500);
    font-size: x-large;
    letter-spacing: var(--letterSpacing);
  }
  .drink-info {
    padding-top: 2rem;
  }
  li {
    /* font-weight: 700;
    text-transform: capitalize;
    line-height: 2; */
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
`;

export default Wrapper;
