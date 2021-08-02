import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { ReactComponent as MenuSvg } from "../../assets/menu_black_24dp.svg";
import { IconButton } from "@chakra-ui/button";

export default function Home() {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          variant="outline"
          icon={<MenuSvg />}
        />
        <MenuList>
          <MenuItem>Sobre mi</MenuItem>
          <MenuItem>Contactame</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Proyectos</MenuItem>
          <MenuItem>Cursos</MenuItem>
          <MenuItem>Actividades</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
