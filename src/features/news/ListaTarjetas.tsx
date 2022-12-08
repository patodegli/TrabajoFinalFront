import { INoticiasNormalizadas } from "./Noticias";
import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticia, TituloTarjetaNoticia } from "./styled";

interface IProps {
  noticias: INoticiasNormalizadas[];
  onClick: (n: INoticiasNormalizadas) => void;
}

export const ListaTarjetas: React.FC<IProps> = ({ noticias, onClick }) => {
  return <>{noticias.map((n) => (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={n.imagen} />
      <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {n.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura onClick={() => onClick(n)}>Ver más</BotonLectura>
    </TarjetaNoticia>
  ))}
  </>
}