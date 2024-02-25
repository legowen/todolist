import React from "react";
// Style
import styled from "styled-components";
// Title Style
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2c86da;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c86da;
  }

  @media only screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

// Date
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDate = today.getDate();

const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const todayTextMonth = monthList[todayMonth - 1];

const Title = () => {
  return (
    <TitleBox>
      <div>
        <h1>{todayDate}</h1>
        <div>
          <p>{todayTextMonth}</p>
          <p>{todayYear}</p>
        </div>
      </div>

      <h1>Have a Nice Day, Okay?</h1>
    </TitleBox>
  );
};

export default Title;