'use client';
import React from "react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
}
type Deck = {
  id: string;
  name: string;
  color: string;
  wins: number;
  losses: number;
  sleeves: string;
  deckbox: string;
  
};

const columns = [
  { key: "name", label: "Deck", },
  { key: "color", label: "Color", },
  { key: "sleeves", label: "Sleeves", },
  { key: "deckbox", label: "Deckbox", },
  { key: "wins", label: "Wins", },
  { key: "losses", label: "Losses", },
];

const data: Deck[] = [
  { id:  'bb553041-ec7c-44fe-9191-6c030ee24022',  name: 'Megatron', color: 'WBR', sleeves: 'Ember', deckbox: 'Orange', wins: 5, losses: 3 },
  { id:  'f484d76b-3bbc-4808-aeb6-9b84f366dbc9',  name: 'Queen Kayla', color: 'WR', sleeves: 'Gold', deckbox: 'Pink', wins: 3, losses: 3 },
  { id:  '15baa47e-2169-4190-8850-641411ceb99d',  name: 'Inga&Esika', color: 'BG', sleeves: 'Power', deckbox: 'Blue', wins: 2, losses: 5 },
]

export default function App() {

  return (
    <Table aria-label="Example table with dynamic content">
    <TableHeader columns={columns}>
      {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={data}>
      {(item) => (
        <TableRow key={item.id}>
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
  );
}
