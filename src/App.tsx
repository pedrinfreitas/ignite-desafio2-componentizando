import { useState } from 'react';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import './styles/content.scss';
import './styles/global.scss';
import './styles/sidebar.scss';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onClickButton={handleClickButton} selected={selectedGenreId} />
      <Content selected={selectedGenreId} />
    </div>
  )
}