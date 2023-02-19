"use client";
import { GetStaticProps } from "next";
import { withLayout } from "../Layout/Layout";
import React, { useState } from "react";
import { Htag, Button, Paragraph, Tag, Rating } from "../components";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [r, sR] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">текс</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <Paragraph font="s">маленький</Paragraph>
      <Paragraph>средний</Paragraph>
      <Paragraph font="l">большой</Paragraph>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Tag size="m" color="green">
        green
      </Tag>
      <Tag size="m" color="primary">
        primary
      </Tag>
      <Rating rating={r} isEditable setRating={sR} />
      <ul>
        {menu?.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
