import React from "react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";

export default { title: "Error" };

export const basic = () => (
  <Wrap>
    <Box>
      <Title>送信に失敗しました</Title>
      <Contents>
        エラー内容が入ります。エラー内容が入ります。エラー内容が入ります。エラー内容が入ります。エラー内容が入ります。
      </Contents>
      <Button>閉じる</Button>
    </Box>
  </Wrap>
);

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  border: 4px solid #ff5151;
  padding: 10px 40px 30px;
  width: 560px;
`;

const Title = styled.p`
  font-size: 24px;
  color: #ff5151;
  font-weight: 700;
  text-align: center;
`;

const Contents = styled.p`
  font-size: 14px;
`;

const Button = styled.button`
  font-size: 16px;
  color: #464e70;
  font-weight: 700;
  width: 200px;
  height: 50px;
  margin: 30px auto 0;
  background: #33b490;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;
