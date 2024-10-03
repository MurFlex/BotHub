import { FC } from "react";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import { IItems } from "../../components/DropdownMenu/DropdownMenu.props";

const Home: FC = () => {
  const items: IItems[] = [
    { label: "Home", value: '/home' },
    { label: "Login", value: '/login' },
    { label: "Cabinet", value: '/cabinet' },
    { label: "Rome", value: '/' },
  ];
  return (
    <>
      <h1>Home</h1>
      <DropdownMenu label={'Выбор страницы'} items={items}/>
    </>
  );
};

export default Home;
