import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import { INoticiasNormalizadas } from "./Noticias";

//este custom hook se encarga de obtener las noticias a través de un cliente de API, normalizarlas y retornarlas en un array

export const useNoticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((n) => {
        const titulo = n.titulo
          .split(" ")
          .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(" ");

        const ahora = new Date();
        const minutosTranscurridos = Math.floor(
          (ahora.getTime() - n.fecha.getTime()) / 60000
        );

        return {
          id: n.id,
          titulo,
          descripcion: n.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: n.esPremium,
          imagen: n.imagen,
          descripcionCorta: n.descripcion.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    obtenerInformacion();
  }, []);
	
  return noticias;
};
