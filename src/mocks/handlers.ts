import { rest } from "msw";
import { API_URL } from "../app/constants";

export const handlers = [
  // Handles a GET /user request
  rest.get(API_URL, (req, res, ctx) => {
    const characterName = req.url.searchParams.get('character')?? "personaje aleatorio"
    
    return res(
      ctx.status(200),
      ctx.json([
        {
          quote:
            "(TEST) All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
          character: characterName,
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
          characterDirection: "Right",
        },
      ])
    );
  }),
];
