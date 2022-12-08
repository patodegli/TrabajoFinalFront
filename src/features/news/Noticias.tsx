import { useState } from "react";
import { ListaTarjetas } from "./ListaTarjetas";
import { ModalNoticia } from "./ModalNoticia";
import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias
} from "./styled";
import { useNoticias } from "./useNoticias";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  
  const [noticia, setNoticia] = useState<INoticiasNormalizadas | null>(null);
  const noticias = useNoticias()

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        <ListaTarjetas noticias={noticias} onClick={(n) => { setNoticia(n) }} />
        <ModalNoticia noticia={noticia} onClose={() => setNoticia(null)} />
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
